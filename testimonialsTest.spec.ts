import { expect } from "@playwright/test";
import { test } from "../fixtures";

test("testimonials", async ({ TestimonialsPage }) => {
  await TestimonialsPage.openApplication();
  await TestimonialsPage.verifyingEntireUI();
});
