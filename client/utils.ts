export const CLIENT_BASE_URL = "http://localhost:5173";

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
