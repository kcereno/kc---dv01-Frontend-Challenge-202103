import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('http://localhost:3000/');
});

test('Loads successfully', async ({ page }) => {
  // Checks for elements that are found in the homepage
  const textElement = await page.getByText('dv01 Loan Analysis');
  expect(textElement).toBeVisible();

  await expect(page).toHaveTitle(/dv01 Loan Analysis/);

  const gradeFilter = await page.getByTestId('grade-filter');
  await expect(gradeFilter).toBeVisible();
});

test('Filters successfully', async ({ page }) => {
  // Get value of Grade 1 from table
  const firstGradeValueText = await page.textContent(
    '[data-testid="grade-value"]'
  );

  if (firstGradeValueText) {
    // Use value to locate element. Assert its visible.
    const firstGradeValueElement = await page.getByText(firstGradeValueText);
    await expect(firstGradeValueElement).toBeVisible();

    // Set a filter
    await page.getByText('Home Ownership').click();
    await page.getByText('MORTGAGE').click();

    // Assert the Grade 1 value to not be present
    await expect(firstGradeValueElement).not.toBeVisible();
  }
});

test('Resets successfully', async ({ page }) => {
  // Same as the filter test but adds an additional reset step
  const firstGradeValueText = await page.textContent(
    '[data-testid="grade-value"]'
  );

  if (firstGradeValueText) {
    const firstGradeValueElement = await page.getByText(firstGradeValueText);
    await expect(firstGradeValueElement).toBeVisible();

    await page.getByText('Home Ownership').click();
    await page.getByText('MORTGAGE').click();

    await expect(firstGradeValueElement).not.toBeVisible();

    // Click reset button
    await page.getByText('Reset').click();

    // Assert Grade One value to be back
    await expect(firstGradeValueElement).toBeVisible();
  }
});
