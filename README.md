# M3 MedAI – Mini Project Challenge

Three local apps (Reviewer, Participant, Server) connected over WebSockets with type-safe contracts.

## 🧠 Stack
- **Frontend:** React + TypeScript (Vite)
- **Backend:** Fastify + Socket.IO + OpenAI
- **Shared:** TypeScript types via pnpm workspaces

## ⚙️ Setup
```bash
pnpm install
cp services/server/.env.example services/server/.env
# Add your OpenAI key inside .env
pnpm dev:server
pnpm dev:reviewer
pnpm dev:participant
