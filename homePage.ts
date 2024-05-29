import { Locator, Page, expect } from "@playwright/test";
import { basePage } from "./basePage";

//importing testdata's
const testData = JSON.parse(
  JSON.stringify(require("../testData/loginCredentials.json"))
);
const testDataURL = JSON.parse(
  JSON.stringify(require("../testData/urls.json"))
);

// Test -- env
const env = testData.qaEnv;

// Test --URL
const url = env.url;
const email = env.email;
const password = env.password;

export class homePage extends basePage {
  readonly homeButtonLoc: Locator;
  readonly aboutusButtonLoc: Locator;
  readonly productsButtonLoc: Locator;
  readonly testimonialsButtonLoc: Locator;
  readonly contactusButtonLoc: Locator;
  readonly loginButtonLoc: Locator;
  readonly footerTestimonials: Locator;
  readonly footerAboutus: Locator;
  readonly footerContactus: Locator;
  readonly footerBookAnAppointment: Locator;
  readonly footerCallus: Locator;
  readonly footerEmail: Locator;
  readonly footerContentLoc: Locator;

  constructor(protected page: Page) {
    super(page);
    this.homeButtonLoc = page.getByRole("tab", { name: "HOME" });
    this.aboutusButtonLoc = page.getByRole("tab", { name: "ABOUT US" });
    this.productsButtonLoc = page.getByRole("tab", { name: "PRODUCTS" });
    this.testimonialsButtonLoc = page.getByRole("tab", {
      name: "TESTIMONIALS",
    });
    this.contactusButtonLoc = page.getByRole("tab", { name: "CONTACT US" });
    this.loginButtonLoc = page.getByRole("button", { name: "Login" });
    this.footerTestimonials = page.getByRole("link", { name: "Testimonials" });
    this.footerAboutus = page.getByRole("link", { name: "About Us" });
    this.footerContactus = page.getByRole("link", { name: "Contact Us" });
    this.footerBookAnAppointment = page.getByRole("link", {
      name: "Book an Appointment",
    });
    this.footerCallus = page.getByText("Call us now +91");
    this.footerEmail = page.getByText("Email nulifewellness@gmail.com");
    this.footerContentLoc = page.locator(
      ".MuiContainer-root.MuiContainer-maxWidthLg.css-bm1rph"
    );
  }

  public async openApplication() {
    await this.page.goto(url);
    await this.waitTillNetworkIdle();
  }

  public async navigatingThroughAllTabsAndVerifyingURL() {
    await this.clickElement(this.aboutusButtonLoc);
    await this.validatePageUrl(testDataURL.aboutUs);
    await this.clickElement(this.homeButtonLoc);
    await this.validatePageUrl(testDataURL.home);
    await this.clickElement(this.productsButtonLoc);
    await this.validatePageUrl(testDataURL.products);
    await this.clickElement(this.testimonialsButtonLoc);
    await this.validatePageUrl(testDataURL.testimonials);
    await this.clickElement(this.contactusButtonLoc);
    await this.validatePageUrl(testDataURL.contactUs);
  }

  public async verifyingQuickLinks() {
    await this.clickElement(this.footerTestimonials);
    await this.waitTillNetworkIdle();
    await this.validatePageUrl(testDataURL.testimonials);
    await this.clickElement(this.footerAboutus);
    await this.waitTillNetworkIdle();
    await this.validatePageUrl(testDataURL.aboutUs);
    await this.clickElement(this.footerContactus);
    await this.waitTillNetworkIdle();
    await this.validatePageUrl(testDataURL.contactUs);
    await this.clickElement(this.footerBookAnAppointment);
    await this.waitTillNetworkIdle();
    await this.validatePageUrl(testDataURL.bookAnAppointment);
  }

  public async verifyingEntireUI() {
    await this.fullScreenUiTesting("homePage.png");
  }

  public async navigatingToHomePage() {
    await this.clickElement(this.homeButtonLoc);
    await this.waitTillNetworkIdle();
  }
}
