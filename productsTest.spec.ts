import { expect } from "@playwright/test";
import { test } from "../fixtures";

test("products", async ({ ProductsPage }) => {
  await ProductsPage.openApplication();
  await ProductsPage.verifyingEntireUI();
});
