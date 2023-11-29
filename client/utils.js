"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySelectorOrThrow = void 0;
function querySelectorOrThrow(parent, selector) {
    const element = parent.querySelector(selector);
    if (!element) {
        throw new Error(`Could not find element with selector: ${selector}`);
    }
    return element;
}
exports.querySelectorOrThrow = querySelectorOrThrow;
