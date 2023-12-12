module.exports = {
  launch: {
    // This will launch a new browser for tests
    headless: true,
  },
  server: {
    // This will start your server before tests and shut it down after
    command: "npm run dev",
    port: 5173,
    launchTimeout: 5000,
  },
};
