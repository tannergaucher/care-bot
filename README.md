# CareBot - LLM Application

## Check in with CareBot and get an LLM generated self care plan for the day

## Uses

- TypeChat
- OpenAI API
- TypeScript / HTML / CSS
- Google Cloud Run
- Google Cloud Text-to-Speech
- Google Cloud Storage
- Cloudflare Workers
- Cloudflare KV

## System Design

[![](https://mermaid.ink/img/pako:eNpNkMFugzAMhl_F8rl9ATRNGtCt08qlsO4QeoiIW6JBgpJQbSK8-9LQSfhkW9__-5cnbLQgTPBq-NBCldcKQr2wT0vmDNvtsy-0Fh5SlnWSlIs7yNiXNt934imMOfs4Qem0ofMizyLkM960BHvp4Eh20FZR8FmIdE0U0loPO1aSuf17wis7HIqH3y7Sb6yiHwdOw0nLhpYk71PW6VHE8_xK81qwZxGEynBlGyMHJ7V6yNacj_GUJZ_iBnsyPZci_GS6QzW6lnqqMQmtoAsfO1djreaA8tHp8lc1mDgz0gbHQXBHueThmz0mF95Zmv8Ai2pvOg?type=png)](https://mermaid.live/edit#pako:eNpNkMFugzAMhl_F8rl9ATRNGtCt08qlsO4QeoiIW6JBgpJQbSK8-9LQSfhkW9__-5cnbLQgTPBq-NBCldcKQr2wT0vmDNvtsy-0Fh5SlnWSlIs7yNiXNt934imMOfs4Qem0ofMizyLkM960BHvp4Eh20FZR8FmIdE0U0loPO1aSuf17wis7HIqH3y7Sb6yiHwdOw0nLhpYk71PW6VHE8_xK81qwZxGEynBlGyMHJ7V6yNacj_GUJZ_iBnsyPZci_GS6QzW6lnqqMQmtoAsfO1djreaA8tHp8lc1mDgz0gbHQXBHueThmz0mF95Zmv8Ai2pvOg)

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
4. Run the server: `cd server && npm install && npm run build && npm start`
5. View client on `http://localhost:5173` and use CareBot!

## Deploy Server to Google Cloud Run

From server root directory while authorized with the gcloud CLI:

```
npm run build && gcloud run deploy server  --source . --set-env-vars=NODE_ENV=production

```
