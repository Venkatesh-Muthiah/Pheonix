import { expect } from "@playwright/test";
import { test } from "../fixtures";

test("home page test", async ({ HomePage }) => {
  await HomePage.openApplication();
  await HomePage.verifyingEntireUI();
  await HomePage.navigatingThroughAllTabsAndVerifyingURL();
  await HomePage.verifyingQuickLinks();
});
