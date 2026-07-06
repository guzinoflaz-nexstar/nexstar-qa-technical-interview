/**
 * Test requirements:

    Navigate to: https://www.theguardian.com/international
    Locate the first article headline on the homepage
    Store the headline text
    Click the article
    On the article page, retrieve the article headline
    Validate that the article headline matches or contains the homepage headline
    The test must have the tag @test_headline

 */

import { test, expect } from '@playwright/test';
import { InternationalNewsPage } from '../pages/InternationalNewsPage';

test('guardian headline challenge @test_headline', async ({ page }) => {
  const home = new InternationalNewsPage(page);

  // Navigate to the International homepage (handles the cookie-consent dialog).
  await home.goto();

  // Locate the first article headline and store its text.
  const homepageHeadline = await home.firstHeadlineText();
  expect(homepageHeadline).not.toEqual('');

  // Click the article.
  await home.openFirstArticle();

  // Retrieve the article headline from the article page (the level-1 heading).
  const articleHeadline = page.getByRole('heading', { level: 1 });

  // Validate that the article headline matches / contains the homepage headline.
  await expect(articleHeadline).toContainText(homepageHeadline);
});
