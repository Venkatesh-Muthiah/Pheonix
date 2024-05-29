import { expect } from "@playwright/test";
import { test } from "../fixtures";

test("bookanappointment", async ({ BookAnAppointmentPage }) => {
  await BookAnAppointmentPage.navigateToThistab();
  //await BookAnAppointmentPage.verifyingEntireUI();
  await BookAnAppointmentPage.bookingAnAppointment();
  await BookAnAppointmentPage.negativeValidation();
});
