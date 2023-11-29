export function querySelectorOrThrow<T extends Element>(
  parent: Element | Document,
  selector: string
): T {
  const element = parent.querySelector(selector);

  if (!element) {
    throw new Error(`Could not find element with selector: ${selector}`);
  }

  return element as T;
}

export const SERVER_BASE_URL = "https://server-yzmezs2csa-ue.a.run.app";
