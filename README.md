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

## System Architecture

[![](https://mermaid.ink/img/pako:eNptkMFqwzAMhl9F-LRBuwcIY7AmWzvWwCBjOyQ5CEdpzBI72MpYafvuU-oWdpgPxvb3__olH5R2DalE7TyOHbxnlQVZj2XaG7Jcw_1y-QCrsiD_Tb6G-ZYKdFPT9ugJPp3_uoLsL3j9qGOt7MyOKeqOYGP4COuog4Kdxx1F8-ofdW5COMLTjfaETG_eSZcDtJPVbJy9jVLej6Q7ZAhiGfCOxfJcbrc55DJaf6l-3jeXYKYfBnYQRhJrVLxcmUcbtDfjHBHRem5NLdRAfkDTyG8d5pdKsQRSpRI5NtTi1HOlKnsSKU7sir3VKmE_0UJNYyMTZAbnCVTSYh_o9AvisXrr?type=png)](https://mermaid.live/edit#pako:eNptkMFqwzAMhl9F-LRBuwcIY7AmWzvWwCBjOyQ5CEdpzBI72MpYafvuU-oWdpgPxvb3__olH5R2DalE7TyOHbxnlQVZj2XaG7Jcw_1y-QCrsiD_Tb6G-ZYKdFPT9ugJPp3_uoLsL3j9qGOt7MyOKeqOYGP4COuog4Kdxx1F8-ofdW5COMLTjfaETG_eSZcDtJPVbJy9jVLej6Q7ZAhiGfCOxfJcbrc55DJaf6l-3jeXYKYfBnYQRhJrVLxcmUcbtDfjHBHRem5NLdRAfkDTyG8d5pdKsQRSpRI5NtTi1HOlKnsSKU7sir3VKmE_0UJNYyMTZAbnCVTSYh_o9AvisXrr)

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
