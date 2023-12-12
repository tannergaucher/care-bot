import puppeteer from "puppeteer";
import { describe, expect, it } from "vitest";

import { CLIENT_BASE_URL } from "./config";

describe("Index Page", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(CLIENT_BASE_URL);

  it("renders a happy button", async () => {
    const happyButton = await page.$("#happy-button");

    expect(happyButton).toBeTruthy();

    const buttonText = await page.evaluate(
      (el) => el?.textContent,
      happyButton
    );

    expect(buttonText).toContain("🙂");
  });

  it("renders a sad button", async () => {
    const sadButton = await page.$("#sad-button");

    expect(sadButton).toBeTruthy();

    const buttonText = await page.evaluate((el) => el?.textContent, sadButton);

    expect(buttonText).toContain("🙁");
  });

  it("renders a speak mood button", async () => {
    const speakButton = await page.$("#speak-mood-button");

    expect(speakButton).toBeTruthy();

    const speakButtonText = await page.evaluate(
      (el) => el?.textContent,
      speakButton
    );

    expect(speakButtonText).toContain("🎤");
  });
});
