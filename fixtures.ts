import { test as baseTest } from "@playwright/test";
import { loginPage } from "./pages/loginPage";
import { basePage } from "./pages/basePage";
import { homePage } from "./pages/homePage";
import { aboutUsPage } from "./pages/aboutUsPage";
import { productsPage } from "./pages/productsPage";
import { testimonialsPage } from "./pages/testimonialsPage";
import { contactUsPage } from "./pages/contactUsPage";
import { bookAnAppointmentPage } from "./pages/bookAnAppointmentPage";
import { therapiesPage } from "./pages/therapiesPage";

type myfixtures = {
  LoginPage: loginPage;
  BasePage: basePage;
  HomePage: homePage;
  AboutUsPage: aboutUsPage;
  ProductsPage: productsPage;
  TestimonialsPage: testimonialsPage;
  ContactusPage: contactUsPage;
  BookAnAppointmentPage: bookAnAppointmentPage;
  TherapiesPage: therapiesPage;
};

export const test = baseTest.extend<myfixtures>({
  LoginPage: async ({ page }, use) => {
    const LoginPage = new loginPage(page);
    await use(LoginPage);
  },

  BasePage: async ({ page }, use) => {
    const BasePage = new basePage(page);
    await use(BasePage);
  },

  HomePage: async ({ page }, use) => {
    const HomePage = new homePage(page);
    await use(HomePage);
  },

  AboutUsPage: async ({ page }, use) => {
    const AboutUsPage = new aboutUsPage(page);
    await use(AboutUsPage);
  },

  ProductsPage: async ({ page }, use) => {
    const ProductsPage = new productsPage(page);
    await use(ProductsPage);
  },

  TestimonialsPage: async ({ page }, use) => {
    const TestimonialsPage = new testimonialsPage(page);
    await use(TestimonialsPage);
  },

  ContactusPage: async ({ page }, use) => {
    const ContactUsPage = new contactUsPage(page);
    await use(ContactUsPage);
  },

  BookAnAppointmentPage: async ({ page }, use) => {
    const BookAnAppointmentPage = new bookAnAppointmentPage(page);
    await use(BookAnAppointmentPage);
  },

  TherapiesPage: async ({ page }, use) => {
    const TherapiesPage = new therapiesPage(page);
    await use(TherapiesPage);
  },
});
