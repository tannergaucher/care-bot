# Care Bot

## Create a Week of Self-Care Activities with Care Bot

## Uses

- TypeScript
- TypeChat
- OpenAI API

## Prerequisites

You must have an OpenAI account and API key to run this app. Additionally, requests use tokens. You must have credits on your OpenAI account to use the API, otherwise you will get a `429` error.

- 1. Create an OpenAI account to get an API key (and free credits for new accounts): https://beta.openai.com/

## Get Started

### Run Application Locally

1. Clone this repo
2. Update `.env.sample` to `.env` and add the following variables:

```
OPENAI_API_KEY="Your OpenAI API key"
OPENAI_MODEL="The OpenAI model name (e.g. gpt-3.5-turbo or gpt-4)"
```

3. Run client: `npm install && npm start`
4. Run server: `cd server && npm install && npm start`
5. Go to `localhost:3000` in your browser

## Deploy Server

From server root directory using gcloud CLI:

```
npm run build && gcloud run deploy server  --source . --set-env-vars=NODE_ENV=production

```
