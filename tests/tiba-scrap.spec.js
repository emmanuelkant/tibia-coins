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
  await typeCredentials(page);
  await clickLoginButton(page);
  await goToManageAccount(page);
  await goToCoinsHistory(page);
  const data = await getDataFromHistoryCoinsTable(page);
  await saveOnFile(testInfo, data);
});
