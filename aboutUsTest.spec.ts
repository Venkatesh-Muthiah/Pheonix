import { expect } from "@playwright/test";
import { test } from "../fixtures";

test("aboutus", async ({ AboutUsPage }) => {
  await AboutUsPage.openApplication();
  await AboutUsPage.verifyingEntireUI();
  await AboutUsPage.verifyingScroll();
});
