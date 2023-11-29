const config = {
  local: {
    SERVER_BASE_URL: "http://localhost:8080",
  },
  production: {
    SERVER_BASE_URL: "https://server-yzmezs2csa-ue.a.run.app",
  },
};

const environment =
  process.env.NODE_ENV === "production" ? "production" : "local";

export const { SERVER_BASE_URL } = config[environment];
