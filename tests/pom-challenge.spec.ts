/**
 * Test requirements:

    Create a test that relies on a Page Object Model with the base URL: https://www.theguardian.com/international
    Create a navigation bar component that is accessible from the Page Object.
    Add a class method that navigates to a section using a value from a custom data structure representing navigation sections (e.g. News, Opinion, Sport, etc.)
    Assert the page URL matches the section passed to the method.
    The test must have the tag @test_pom
 */

import { test, expect } from '@playwright/test';

test('page object model challenge', async ({ page }) => {
  // Candidate's solution goes here
});
