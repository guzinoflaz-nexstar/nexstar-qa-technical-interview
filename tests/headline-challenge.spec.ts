import { test, expect } from '@playwright/test';

test('guardian homepage headline matches article headline @test_headline', async ({ page }) => {
  // 1. Navigate to The Guardian homepage
  await page.goto('https://www.theguardian.com/international');

  // Dismiss the cookie / consent banner if present (Sourcepoint iframe)
  try {
    const consent = page.frameLocator('[id^="sp_message_iframe"]');
    await consent
      .getByRole('button', { name: /Yes, I.m happy|Accept all|I.m OK/i })
      .click({ timeout: 8000 });
  } catch {
    // no banner, continue
  }

  // 2 & 3. Locate the first article headline and store its text
  const firstHeadline = page.locator('a[data-link-name*="article"]').first();
  await firstHeadline.scrollIntoViewIfNeeded();
  const homepageHeadline = (await firstHeadline.innerText()).trim();
  expect(homepageHeadline.length).toBeGreaterThan(0);

  // 4. Click the articlee
  await firstHeadline.click();
  await page.waitForLoadState('domcontentloaded');


  // 6. Validate: article headline matches OR contains the homepage headline
  const normalize = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase();
  expect(
    normalize(articleHeadline).includes(normalize(homepageHeadline)) ||
      normalize(homepageHeadline).includes(normalize(articleHeadline))
  ).toBeTruthy();
});
