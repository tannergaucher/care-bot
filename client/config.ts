const config = {
  local: {
    WORKER_BASE_URL: "http://localhost:8787",
    CLIENT_BASE_URL: "http://localhost:5173",
  },
  production: {
    WORKER_BASE_URL:
      "https://llm-cache-worker.tannermichaelgaucher.workers.dev",
    CLIENT_BASE_URL: "care-bot.netlify.app/",
  },
};

const environment =
  process.env.NODE_ENV === "production" ? "production" : "local";

export const { WORKER_BASE_URL, CLIENT_BASE_URL } = config[environment];
