"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORKER_BASE_URL = void 0;
const config = {
    local: {
        WORKER_BASE_URL: "http://localhost:8787",
    },
    production: {
        WORKER_BASE_URL: "https://llm-cache-worker.tannermichaelgaucher.workers.dev",
    },
};
const environment = process.env.NODE_ENV === "production" ? "production" : "local";
exports.WORKER_BASE_URL = config[environment].WORKER_BASE_URL;
