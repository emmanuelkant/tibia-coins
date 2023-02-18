// @ts-check
const { test } = require("@playwright/test");
const {
  saveOnFile,
  typeCredentials,
  clickLoginButton,
  goToCoinsHistory,
  closeCookiesAlert,
  goToManageAccount,
  getDataFromHistoryCoinsTable,
} = require("./utils");

test("Extract the data", async ({ page }, testInfo) => {
  await page.goto("https://www.tibia.com/account/");

  await closeCookiesAlert(page);
  await page.waitForTimeout(5000);
  await typeCredentials(page);
  await page.waitForTimeout(5000);
  await clickLoginButton(page);
  await page.waitForTimeout(5000);
  await goToManageAccount(page);
  await page.waitForTimeout(5000);
  await goToCoinsHistory(page);
  await page.waitForTimeout(5000);
  const data = await getDataFromHistoryCoinsTable(page);
  await saveOnFile(testInfo, data);
});
