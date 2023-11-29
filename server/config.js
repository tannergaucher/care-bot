"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_BASE_URL = void 0;
const config = {
    local: {
        CLIENT_BASE_URL: "http://localhost:5173",
    },
    production: {
        CLIENT_BASE_URL: "https://care-bot.netlify.app",
    },
};
const environment = process.env.NODE_ENV === "production" ? "production" : "local";
exports.CLIENT_BASE_URL = config[environment].CLIENT_BASE_URL;
