const config = {
  local: {
    // wrangler dev
    SERVER_BASE_URL: "http://localhost:8787",
  },
  production: {
    SERVER_BASE_URL:
      "https://llm-cache-worker.tannermichaelgaucher.workers.dev",
  },
};

const environment =
  process.env.NODE_ENV === "production" ? "production" : "local";

export const { SERVER_BASE_URL } = config[environment];
