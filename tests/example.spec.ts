import { test, expect, type Page} from '@playwright/test';

test.describe('top page', () => {
  let topPage:Page

  test.beforeEach(async({browser}) => {
    topPage = await browser.newPage();
    await topPage.goto('http://localhost:3000', { waitUntil: 'load' });
    // await topPage.screenshot({path: './screenshot.png', fullPage: true});
  })

  test.afterEach(async () => {
    await topPage.close();
  });

  test('has title', async () => {
    // Expect a title "to contain" a substring.
    await expect(topPage).toHaveTitle('React App')
  });

  test('reducer add count', async () => {
    await topPage.getByRole('button', { name: /redux add/i }).click();
    await expect(topPage.locator("#test")).toHaveText('1');
  });

  test('form input', async() => {
      await topPage.getByLabel('email').click();
      await topPage.getByLabel('email').fill('test@@@@.co.jp');
      await topPage.getByLabel('tel').click();
      await topPage.getByLabel('tel').fill('08035323219');
      await topPage.getByRole('button', { name: '送信' }).click();
      await topPage.getByText('不正やん').isVisible();
  })
})



