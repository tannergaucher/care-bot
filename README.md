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

[![](https://mermaid.ink/img/pako:eNpNkNtugzAMhl_F8nX7AmiaNKA7aOWmsO4i9CIibokGMUpCtQl496XQTfjKh-__bXnAihVhhBcruxqKtDQQ4kl8OLIn2G4fx4xZjRCLpNFk_NyDRHyy_boRD6FMxfsRcs-WTos8maExkVVNCg7kOjaOgskyjldjyLRzI-xETvb6ZwjPYr_P7ma7mX4RBX178AxH1hUtZ7wNScO9mnfLC01rwauYQSisNK6yuvOazV225sb_82LcYEu2lVqFhww3qERfU0slRiFVdJZ940sszRRQ2XvOf0yFkbc9bbDvlPSUahle2WJ0lo2j6RdRLm5Z?type=png)](https://mermaid.live/edit#pako:eNpNkNtugzAMhl_F8nX7AmiaNKA7aOWmsO4i9CIibokGMUpCtQl496XQTfjKh-__bXnAihVhhBcruxqKtDQQ4kl8OLIn2G4fx4xZjRCLpNFk_NyDRHyy_boRD6FMxfsRcs-WTos8maExkVVNCg7kOjaOgskyjldjyLRzI-xETvb6ZwjPYr_P7ma7mX4RBX178AxH1hUtZ7wNScO9mnfLC01rwauYQSisNK6yuvOazV225sb_82LcYEu2lVqFhww3qERfU0slRiFVdJZ940sszRRQ2XvOf0yFkbc9bbDvlPSUahle2WJ0lo2j6RdRLm5Z)

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
