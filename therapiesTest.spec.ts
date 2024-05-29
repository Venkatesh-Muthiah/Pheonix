import { expect } from "@playwright/test";
import { test } from "../fixtures";

test("products", async ({ TherapiesPage }) => {
  await TherapiesPage.openApplication();
  await TherapiesPage.clickingOnSubmenus("Therapies");
  await TherapiesPage.clickingOnSubmenus("Diagnostics");
  await TherapiesPage.clickingOnSubmenus("Integrative Cancer Health");
  await TherapiesPage.clickingOnSubmenus("Integrative Mental Health");
});
