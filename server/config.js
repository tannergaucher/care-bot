"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_BASE_URL = void 0;
const config = {
    local: {
        // update to WORKER_BASE_URL
        CLIENT_BASE_URL: "http://localhost:8787",
    },
    production: {
        CLIENT_BASE_URL: "https://llm-cache-worker.tannermichaelgaucher.workers.dev",
    },
};
const environment = process.env.NODE_ENV === "production" ? "production" : "local";
exports.CLIENT_BASE_URL = config[environment].CLIENT_BASE_URL;
