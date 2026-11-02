# Mayday

Early warning for seafarers, before a crew is abandoned.

A seafarer sends a voice note, a photo of a pay slip, or a few typed words, in their own language. Mayday checks it against public ship records and tells them, and a welfare officer, how serious it is and what to do now. It works with no signal and sends by itself when the phone is back online.

Built for the Mozilla Otari hackathon. Every AI step runs through [Otari](https://github.com/mozilla-ai/otari) on open-weight models.

## Folders

| Folder | What it holds |
|---|---|
| `frontend` | The phone app for seafarers and welfare officers |
| `backend` | Receives reports, saves them, runs officer actions |
| `ai` | The Otari pipeline: understand, read, investigate, score, explain |
| `mcp` | Shipwatch, the MCP server with ship records |

## Run it

```
npm install
cp .env.example .env
npm run seed -w mcp
npm run start -w mcp
npm run start -w backend
npm run dev -w frontend
```

Add your Otari key to `.env` first. See `PLAN.md` for the full plan.
