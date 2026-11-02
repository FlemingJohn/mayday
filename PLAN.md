# Mayday plan

Early warning for seafarers, before a crew is abandoned.

How the code is written lives in `CLAUDE.md`. This file holds everything specific to Mayday.

---

## The problem

In 2025 a record 6,223 seafarers were abandoned on 410 ships, owed $25.8 million in wages. Pay stops for weeks, then months, then the owner goes silent. The warning signs show up weeks before the crew is left stranded, but nobody connects them in time. Existing tools only record cases after they happen.

Sources:

- [ITF: abandonment at record levels](https://www.hellenicshippingnews.com/itf-warns-seafarer-abandonment-has-reached-record-levels/)
- [Lloyd's List: cases spike in 2024](https://www.lloydslist.com/LL1152206/Seafarer-abandonment-cases-spike-in-2024)
- [Flags of convenience fuel the crisis](https://www.freightnews.co.za/article/flags-of-convenience-fuel-seafarer-abandonment-crisis)
- [ILO abandonment database](https://wwwex.ilo.org/dyn/r/abandonment/seafarers/about)
- [IMO: seafarer abandonment](https://www.imo.org/en/OurWork/Legal/Pages/Seafarer-abandonment.aspx)
- [ITF coordinator gets 60 to 70 WhatsApp messages a day](https://cyprus-mail.com/2026/05/08/itf-coordinator-warns-of-unprecedented-seafarer-crisis-in-conflict-zones)
- [MLC amendments: crew internet access since December 2024](https://www.ilo.org/resource/news/new-important-set-amendments-mlc-2006-will-enter-force-23-december-2024)

Still to confirm before the video: the "two months unpaid counts as abandoned" rule in MLC 2006 Standard A2.5.2.

## The solution

A seafarer sends a voice note, a photo of a pay slip, or a few typed words, in their own language. Mayday checks it against public ship records and tells them, and a welfare officer, how serious it is and what to do now. With no signal, everything is saved on the phone and sends by itself later.

## Who uses it

| User | Gets |
|---|---|
| Seafarer | Risk level, money owed, next steps in their language, a proof file. No name needed |
| Welfare officer (ITF, union, port chaplain) | Ships that need help, worst first. Take a case, mark it contacted or solved |

---

## Folders

| Folder | Holds | Runs on |
|---|---|---|
| `frontend` | Phone app, Preact and Vite, later wrapped by Capacitor | Phone browser, Android app |
| `backend` | Hono API, SQLite, calls the `ai` pipeline | Render |
| `ai` | The Otari pipeline, imported by `backend` | Inside `backend` |
| `mcp` | Shipwatch MCP server with ship records | Render, needs a public URL for Otari |

Each folder has its own types. The few types that cross folders are copied, and `backend` checks every incoming report with zod.

## The pipeline in `ai`

| Step | File | Model | Otari feature |
|---|---|---|---|
| Understand voice or text | `understandMessage.ts` | `xiaomi/mimo-v2.6-flash` | Open-weight, audio input |
| Read a photo | `readPhoto.ts` | `meta/llama-4-scout-17b` | Open-weight, image input |
| Check ship records | `investigateShip.ts` | `deepseek/deepseek-v4-flash` | MCP, web search, agent tool loop |
| Score the risk | `scoreRisk.ts` | `deepseek/deepseek-v4-flash` | Code execution |
| Explain in their language | `explainResult.ts` | `google/gemma-3-27b-it` | Open-weight |

Every model name comes from `.env`, so each one can be swapped for an Otari routing policy name without touching code.

## Rubric

| Item | How | Points |
|---|---|---|
| Open-weight models | MiMo, Llama 4 Scout, DeepSeek, Gemma in different roles | 30 |
| Routing and fallbacks | Routing policy per role, `otari-fallback` header shown live | 10 |
| MCP | Shipwatch, four tools | 10 |
| Web search | Owner news | 10 |
| Code execution | `riskScore.py` run in the sandbox | 10 |
| Budgets | Project cap | 10 |
| Multiple models, distinct roles | Five steps | 10 |
| Guardrails | Personal details and prompt injection | 10 |
| Per-user budgets | `user` field set to the seafarer id | 10 |
| Project and demo | Real crisis, working app, clear video | 10 |

---

## Edge cases

Priority: 🔴 before the demo, 🟡 if time allows, ⚪ after the hackathon.

### What the seafarer sends

| Edge case | Handling | Priority |
|---|---|---|
| Voice note silent, noisy or very short | `isUnderstood` false, ask to try again closer to the phone | 🔴 |
| Voice note over two minutes | Recording stops at two minutes | 🔴 |
| Mixed languages | MiMo handles mixed speech, reply in the chosen language | 🟡 |
| Photo blurry, dark or wrong document | `isReadable` false, ask for a clearer photo | 🔴 |
| Contract in a language they cannot read | Read it anyway, explain in their language | 🟡 |
| Hidden instructions in a photo | Prompt injection guardrail, score comes from code | 🔴 |
| Unclear money or currency | Amount and currency kept apart, no conversion | 🟡 |
| Unclear dates | Model gives the month name, code works out the year | 🔴 |
| Message not about abandonment | General help contacts, no score | 🟡 |

### Finding the ship

| Edge case | Handling | Priority |
|---|---|---|
| Ship not in the database | Report saved with the typed name | 🔴 |
| Typo in the name | Edit distance search in `findShipsByName` | 🔴 |
| Two ships with the same name | Show type and flag, seafarer picks | 🔴 |
| Ship renamed | Match on IMO number | 🟡 |
| Seafarer does not know the IMO number | Never asked for | 🔴 |

### No signal and weak signal

| Edge case | Handling | Priority |
|---|---|---|
| Offline for days | Queue on the phone, oldest first | 🔴 |
| Signal drops mid upload | Report id makes a resend safe, `insert or ignore` | 🔴 |
| App closed before sending | Sends on next open, Android app retries in background | 🟡 |
| Phone storage full | Warn before saving, compress photos | 🟡 |
| Browser clears saved data | Capacitor app keeps storage safe | 🟡 |
| Very slow connection | Photos shrunk to about 200 KB | 🔴 |
| Phone clock wrong | Server records its own received time | 🟡 |
| Result arrives while app is closed | Shown on next open, notification in the Android app | 🟡 |

### AI and Otari failures

| Edge case | Handling | Otari feature | Priority |
|---|---|---|---|
| Model down or slow | Routing policy falls back | Routing | 🔴 |
| Main and backup both down | Report marked failed, retried later | | 🔴 |
| Broken JSON | zod rejects, one retry with a stricter reminder | | 🔴 |
| Invented facts | Facts only from MCP records, explain step may only reword | MCP | 🔴 |
| Code sandbox unavailable | Same formula in TypeScript, `wasScoredInSandbox` false | Code execution | 🟡 |
| Shipwatch asleep on Render | Ping `/health` every ten minutes, score without records if needed | MCP | 🔴 |
| Web search finds nothing | Skip that warning sign | Web search | 🟡 |
| Fetched page carries instructions | Allowed domains and guardrail | Guardrails | 🟡 |
| Project budget used up | Reports wait, officer sees AI paused | Budgets | 🔴 |
| One user hits their cap | Report saved and forwarded without the check | Per-user budgets | 🔴 |
| Language the model handles poorly | Simple English, colour and numbers stay | | 🟡 |
| Check takes over a minute | Runs in the background, phone checks back | | 🔴 |

### The risk score

| Edge case | Handling | Priority |
|---|---|---|
| Crew members disagree | Each report scored alone, ship shows how many report late pay | 🔴 |
| Only one report | Ship shows the report count | 🟡 |
| Old reports | Signs older than sixty days count less | 🟡 |
| Problem solved | Officer marks solved, next report starts fresh | 🔴 |
| One calm report among several unpaid | Ship keeps the most serious recent level | 🔴 |
| False alarm against a real company | Warning signs, never accusations, sources shown, fictional demo ship | 🔴 |

### Safety and privacy

| Edge case | Handling | Priority |
|---|---|---|
| Someone in danger now | Detected first, emergency steps shown at once | 🔴 |
| Names and passport numbers in photos | Guardrail removes them, photo deleted after the check | 🔴 |
| Captain or company sees the app | No name needed, discreet mode later | ⚪ |
| Shared phone | No accounts, records can be cleared | 🟡 |
| Fake reports | Per-user caps, rate limits, urgent at ship level needs a second report or an officer | 🟡 |
| Officer login guessed | Password login, lock after failed tries | 🟡 |

### Officer side

| Edge case | Handling | Priority |
|---|---|---|
| Two officers take the same case | First wins, the other sees who took it | 🔴 |
| Ship moves port | Location from the latest report or record | 🟡 |
| Flood of reports from one ship | Grouped into one ship case with a count | 🔴 |

---

## Build order

### Done

- [x] Workspace with `frontend`, `backend`, `ai`, `mcp`
- [x] `ai` pipeline: understand, read, investigate, score, explain, emergency path
- [x] Risk formula in TypeScript and Python with tests
- [x] `mcp` shipwatch server with four tools and fictional demo ships
- [x] `backend` reports, ship search through MCP, ship cases, take and solve
- [x] `frontend` theme, shared components, welcome and home screens

### Next

- [ ] First run with a real Otari key, `npm run try -w @mayday/ai`
- [ ] Deploy `mcp` to Render, set `SHIPWATCH_PUBLIC_URL`, confirm Otari reaches it
- [ ] Confirm code execution is enabled on hosted Otari
- [ ] Confirm how per-user budgets work for people who are not Otari members
- [ ] Add a provider key and one routing policy per role
- [ ] Set up guardrails for personal details and prompt injection
- [ ] Frontend: recorder, photo picker, offline queue, service worker
- [ ] Frontend: quick check, saved, result, records screens
- [ ] Frontend: officer overview and ship screens
- [ ] Translations for the interface
- [ ] Self-host fonts for offline use
- [ ] Retry failed reports
- [ ] Proof file PDF
- [ ] Capacitor Android build through GitHub Actions
- [ ] Import real Tokyo MOU, Paris MOU and ILO data
- [ ] Demo video, feedback video, written feedback

## Submission checklist

- [ ] Public GitHub repository and branch name
- [ ] Link to the first commit that introduced Otari
- [ ] List of Otari features used
- [ ] Issues or pull requests opened on the Otari repository
- [ ] Demo video, three to five minutes
- [ ] Feedback: video, written, or both

Deadline: 12 November 2026, 04:29 IST.
