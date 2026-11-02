# Otari feedback

Everything that worked, surprised us, or got in the way while building Mayday. This becomes the written and video feedback for the submission.

## What did not work

| Date | Where | What happened | How to reproduce |
|---|---|---|---|
| 2026-10-31 | Hosted docs, Quickstart | The docs give the base URL as `https://api.otari.ai/v1`. The server answers 404: "Otari serves its API under /api/v1, not /v1." | `curl https://api.otari.ai/v1/chat/completions` |
| 2026-10-31 | Hosted docs | The Quickstart says workspace keys start with `otk_`. The routing guide and the Python SDK README show `tk_`. | Compare the two pages |
| 2026-11-01 | Public model catalog | Some open-weight models (Qwen, Voxtral) are missing from `/api/v1/catalog/models` but appear in a workspace model list, without an `open_weights` field. | Compare the public catalog with `/api/v1/models` |
| 2026-11-02 | TypeScript SDK README | No mention of `mcp_servers`, `otari_web_search` or `otari_code_execution`. Unclear whether the SDK passes them through. | `npm view @mozilla-ai/otari readme` |

## What worked well

| Date | What |
|---|---|
| 2026-11-01 | Text, image and audio input all worked first try through one endpoint with open-weight models. |
| 2026-11-01 | Response headers `otari-provider`, `otari-model`, `otari-fallback` make it easy to show which host served a request. |
| 2026-11-01 | The 404 message for the wrong path tells you the right path. |

## Friction

| Date | What |
|---|---|
| 2026-10-31 | Routing policies only route across your own provider keys. Catalog models paid from the wallet cannot be used in a fallback chain, so a hackathon project needs a separate provider account to show routing. |

## Written feedback answers

**When were you most tempted to skip Otari and call the provider directly? What happened?**

**What did you end up building yourself that Otari should have done for you?**

**If the rules had not required Otari, would you have continued using it? Why or why not?**
