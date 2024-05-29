import { expect } from "@playwright/test";
import { test } from "../fixtures";

test("contactus", async ({ ContactusPage }) => {
  await ContactusPage.openApplication();
  await ContactusPage.verifyingEntireUI();
});
