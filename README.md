# CareBot - LLM / TypeChat Natural Language Application

## Create an AI generated self care plan for the day by checking in with CareBot

## Uses

- TypeChat
- OpenAI API
- TypeScript / HTML / CSS
- Google Cloud Run
- Google Cloud Text-to-Speech
- Google Cloud Speech
- Google Cloud Storage
- Cloudflare Workers
- Cloudflare KV

## Prerequisites

You must have an OpenAI account and API key to run CareBot locally. Additionally, OpenAI API requests use tokens. You must have active credits available on your OpenAI account, otherwise you will get a `429` error. To create an OpenAI account, get an API key (and free credits for new accounts) see here: https://beta.openai.com/

## Run CareBot Locally

1. Clone this repo
2. Update `.env.sample` to `.env` in `/server` and update the following variable values with your own:

```
OPENAI_API_KEY="<Your OpenAI API key>"
OPENAI_MODEL="<The OpenAI model name (e.g. gpt-3.5-turbo or gpt-4)>"
GCP_PROJECT_ID="<Your Google Cloud Project ID>"
```

3. Run the client: `cd client && npm install && npm run dev`
4. Run the server: `cd server && npm run build && npm start`
5. View client on `http://localhost:5173` and make a request

## Deploy Server to Google Cloud Run

From server root directory while authorized with the gcloud CLI:

```
npm run build && gcloud run deploy server  --source . --set-env-vars=NODE_ENV=production

```
