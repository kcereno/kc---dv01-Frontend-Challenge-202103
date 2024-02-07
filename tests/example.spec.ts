import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('http://localhost:3000/');
});

test('Loads successfully', async ({ page }) => {
  // Check for header
  const textElement = await page.getByText('dv01 Loan Analysis');
  expect(textElement).toBeVisible();

  // Check for title
  await expect(page).toHaveTitle(/dv01 Loan Analysis/);

  // Check for Grade filter
  const gradeFilter = await page.getByTestId('grade-filter');
  await expect(gradeFilter).toBeVisible();
});

test('Filters successfully', async ({ page }) => {
  const firstGradeValueText = await page.textContent(
    '[data-testid="grade-value"]'
  );

  if (firstGradeValueText) {
    const firstGradeValueElement = await page.getByText(firstGradeValueText);
    await expect(firstGradeValueElement).toBeVisible();

    await page.getByText('Home Ownership').click();
    await page.getByText('MORTGAGE').click();

    await expect(firstGradeValueElement).not.toBeVisible();
  }
});

test('Resets successfully', async ({ page }) => {
  const firstGradeValueText = await page.textContent(
    '[data-testid="grade-value"]'
  );

  if (firstGradeValueText) {
    const firstGradeValueElement = await page.getByText(firstGradeValueText);
    await expect(firstGradeValueElement).toBeVisible();

    await page.getByText('Home Ownership').click();
    await page.getByText('MORTGAGE').click();

    await expect(firstGradeValueElement).not.toBeVisible();

    await page.getByText('Reset').click();

    await expect(firstGradeValueElement).toBeVisible();
  }
});
