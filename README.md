# CareBot - LLM Application

## Check in with CareBot and create an LLM generated self care plan for the day

## Uses

- [TypeChat](https://github.com/microsoft/TypeChat)
- [OpenAI API](https://platform.openai.com/docs/overview)
- TypeScript / HTML / CSS / [Vite](https://vitejs.dev/)
- [Google Cloud Run](https://cloud.google.com/run/?hl=en)
- [Google Cloud Text-to-Speech](https://cloud.google.com/text-to-speech)
- [Google Cloud Storage](https://cloud.google.com/storage)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Cloudflare KV](https://developers.cloudflare.com/workers/runtime-apis/kv)

## System Design

[![](https://mermaid.ink/img/pako:eNpNkMFugzAMhl_F8rl9ATRNGtBt1drLYN0h9BARt0SDBCVm2kR496XQSfhk-_9-2_KItVWECV6d7Bso88pAjCfx4cmdYbt9DEdrVYBUZK0mw3MPMvFp3deNeIhlLt5OULB1dF7s2QyFTNYNQaM52hchXQud9j7AThTkvv9HwbM4HI73MbuZfhEl_TCwhZPVNS0H7MestYOat8orTWvDq5hBKJ00vna6Z23N3bbmwjv53hpPIV23c9xgR66TWsW_jDepQm6oowqTmCq6yKHlCiszRVQObItfU2PCbqANDr2STLmW8aMdJhfZepr-AFgpbrY?type=png)](https://mermaid.live/edit#pako:eNpNkMFugzAMhl_F8rl9ATRNGtBt1drLYN0h9BARt0SDBCVm2kR496XQSfhk-_9-2_KItVWECV6d7Bso88pAjCfx4cmdYbt9DEdrVYBUZK0mw3MPMvFp3deNeIhlLt5OULB1dF7s2QyFTNYNQaM52hchXQud9j7AThTkvv9HwbM4HI73MbuZfhEl_TCwhZPVNS0H7MestYOat8orTWvDq5hBKJ00vna6Z23N3bbmwjv53hpPIV23c9xgR66TWsW_jDepQm6oowqTmCq6yKHlCiszRVQObItfU2PCbqANDr2STLmW8aMdJhfZepr-AFgpbrY)

### Design Resources

- [The architecture of today’s LLM applications
  on Github](https://github.blog/2023-10-30-the-architecture-of-todays-llm-applications/)

- [How to build an enterprise LLM application: Lessons from GitHub Copilot
  ](https://github.blog/2023-09-06-how-to-build-an-enterprise-llm-application-lessons-from-github-copilot/)

## Prerequisites

You must have an OpenAI account and API key to run CareBot locally. Additionally, OpenAI API requests use tokens. You must have active credits available on your OpenAI account, otherwise you will get a `429` error. To create an OpenAI account, get an API key (and free credits for new accounts) see here: https://beta.openai.com/

## Run CareBot Locally

1. Clone this repo
2. Update `.env.sample` to `.env` in `~/server` and add your values to:

```
OPENAI_API_KEY="<Your OpenAI API key>"
OPENAI_MODEL="<The OpenAI model name (e.g. gpt-3.5-turbo or gpt-4)>"
GCP_PROJECT_ID="<Your Google Cloud Project ID>"
```

3. Run the client: `cd client && npm install && npm run dev`
4. Run the cloudflare worker: `cd worker && npm install && npm run dev`
5. Run the server: `cd server && npm install && npm run build && npm start`
6. View client on `http://localhost:5173` and use CareBot!

## Deploy Server to Google Cloud Run

From server root directory while authorized with the gcloud CLI:

```
npm run build && gcloud run deploy server  --source . --set-env-vars=NODE_ENV=production

```
