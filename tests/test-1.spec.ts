import { test, expect } from '@playwright/test';

test('Test of Playwright the page of kash latam', async ({ page }) => {

  await page.goto('https://kashlatam.com/');

  await page.locator('.attachment-large').first().click();

  await page.getByRole('heading', { name: 'Selecciona el país del cual nos visitas' }).click();

  await page.locator('section:has-text("Guatemala Costa Rica")').getByRole('link').nth(2).click();
  await expect(page).toHaveURL('https://kashlatam.com/cr/');

  await page.getByRole('heading', { name: 'Cambiá la forma' }).click();

  await page.getByText('de transferir dinero').click();

  await page.locator('section:has-text(".st0{fill:#FFFFFF;} .st1{fill:#01BBD3;} .st2{fill:#03CEAC;} Cambiá la formade tr")').click();

  await page.locator('section:has-text(".st0{fill:#FFFFFF;} .st1{fill:#01BBD3;} .st2{fill:#03CEAC;} Cambiá la formade tr")').getByRole('link').click();

});