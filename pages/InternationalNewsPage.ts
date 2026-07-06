import { type Page, type Locator, expect } from '@playwright/test';

/**
 * Page Object for The Guardian's International homepage.
 *
 * Locators favour Playwright's built-in, accessibility-first getters
 * (getByRole / getByLabel / frameLocator) over brittle CSS/class selectors.
 */
export class InternationalNewsPage {
  readonly page: Page;

  /** First article in the main "News" section (the top headline of the homepage). */
  readonly firstArticle: Locator;

  constructor(page: Page) {
    this.page = page;
    // The News section is a stable landmark; its first link is the lead story.
    // Within it we locate the article purely by role.
    this.firstArticle = page.locator('#container-news').getByRole('link').first();
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.theguardian.com/international', {
      waitUntil: 'domcontentloaded',
    });
    await this.acceptCookies();
  }

  /**
   * Dismiss the Sourcepoint cookie-consent dialog if it appears.
   * Best-effort: the dialog lives in an iframe and may be absent on repeat runs.
   */
  async acceptCookies(): Promise<void> {
    const accept = this.page
      .frameLocator('iframe[title="The Guardian consent message"]')
      .getByRole('button', { name: 'Yes, I accept' });
    try {
      await accept.click({ timeout: 8000 });
      // Wait for the modal iframe to detach so it no longer intercepts clicks.
      await expect(
        this.page.locator('iframe[title="The Guardian consent message"]'),
      ).toHaveCount(0, { timeout: 8000 });
    } catch {
      // No consent dialog shown — carry on.
    }
  }

  /**
   * The headline text of the first article, read from the link's accessible
   * name (its aria-label), which is the clean headline without the section kicker.
   */
  async firstHeadlineText(): Promise<string> {
    const headline = await this.firstArticle.getAttribute('aria-label');
    if (!headline) {
      throw new Error('Could not read the first article headline from the homepage.');
    }
    return headline.trim();
  }

  /** Open the first article and wait for its page to load. */
  async openFirstArticle(): Promise<void> {
    await this.firstArticle.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}
