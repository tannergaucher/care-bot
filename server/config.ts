const config = {
  local: {
    CLIENT_BASE_URL: "http://localhost:5173",
  },
  production: {
    CLIENT_BASE_URL: "https://care-bot.netlify.app",
  },
};

const environment =
  process.env.NODE_ENV === "production" ? "production" : "local";

export const { CLIENT_BASE_URL } = config[environment];
