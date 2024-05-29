import { test } from "../fixtures";

test("Test automation", async ({
  HomePage,
  AboutUsPage,
  ProductsPage,
  TestimonialsPage,
  ContactusPage,
  BookAnAppointmentPage,
}) => {
  await AboutUsPage.openApplication();
  await AboutUsPage.verifyingEntireUI();
  await AboutUsPage.verifyingScroll();

  await ProductsPage.openApplication();
  await ProductsPage.verifyingEntireUI();

  await TestimonialsPage.openApplication();
  await TestimonialsPage.verifyingEntireUI();

  await ContactusPage.openApplication();
  //await ContactusPage.verifyingEntireUI();

  await BookAnAppointmentPage.navigateToThistab();
  await BookAnAppointmentPage.bookingAnAppointment();
  await BookAnAppointmentPage.negativeValidation();
  await HomePage.navigatingThroughAllTabsAndVerifyingURL();
  await HomePage.verifyingQuickLinks();
});
