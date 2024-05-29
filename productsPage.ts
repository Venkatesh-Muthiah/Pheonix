import { Locator, Page, expect } from "@playwright/test";
import { basePage } from "./basePage";
import { faker } from "@faker-js/faker";

//importing testdata's
const testDataURL = JSON.parse(
  JSON.stringify(require("../testData/urls.json"))
);

export class productsPage extends basePage {
  constructor(protected page: Page) {
    super(page);
  }
  public async openApplication() {
    await this.page.goto(testDataURL.products);
    await this.waitTillNetworkIdle();
  }
  public async verifyingEntireUI() {
    await this.fullScreenUiTesting("products.png");
  }
}
