import { Locator, Page, expect } from "@playwright/test";
import { basePage } from "./basePage";
import { faker } from "@faker-js/faker";

//importing testdata's
const testDataURL = JSON.parse(
  JSON.stringify(require("../testData/urls.json"))
);

export class contactUsPage extends basePage {
  readonly addressLoc: Locator;

  constructor(protected page: Page) {
    super(page);
    this.addressLoc = page.locator(".MuiBox-root css-13s4dk6");
  }
  public async openApplication() {
    await this.page.goto(testDataURL.contactUs);
    await this.waitTillNetworkIdle();
  }
  public async verifyingEntireUI() {
    await this.fullScreenUiTesting("contactus.png");
  }

  public async verifyingAddress() {
    await this.validateElementText(
      this.addressLoc,
      "Flat 1B, Jayamkondar Building 12/40, Murray's Gate Road, Vannia Teynampet, Alwarpet, Chennai, Tamil Nadu 600018"
    );
  }
}
