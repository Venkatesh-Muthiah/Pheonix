import { Locator, Page, expect } from "@playwright/test";
import { basePage } from "./basePage";
import { faker } from "@faker-js/faker";

//importing testdata's
const testDataURL = JSON.parse(
  JSON.stringify(require("../testData/urls.json"))
);

export class aboutUsPage extends basePage {
  readonly leftScrollLoc: Locator;
  readonly rightScrollLoc: Locator;
  readonly firstDoc: Locator;
  readonly secondDoc: Locator;
  readonly thirdDoc: Locator;

  constructor(protected page: Page) {
    super(page);
    this.leftScrollLoc = page.getByTestId("ChevronLeftIcon");
    this.rightScrollLoc = page.getByTestId("ChevronRightIcon");
    this.firstDoc = page.getByRole("heading", { name: "Dr Tasmiya Banu" });
    this.secondDoc = page.getByRole("heading", { name: "Dr Gomathi" });
    this.thirdDoc = page.getByRole("heading", { name: "Doctor Name" });
  }
  public async openApplication() {
    await this.page.goto(testDataURL.aboutUs);
    await this.waitTillNetworkIdle();
  }
  public async verifyingEntireUI() {
    await this.fullScreenUiTesting("aboutUsPage.png");
  }

  public async verifyingScroll() {
    await this.validateElementText(this.firstDoc, "Dr Tasmiya Banu");
    await this.clickElement(this.leftScrollLoc);
    await this.validateElementText(this.thirdDoc, "Doctor Name");
    await this.clickElement(this.rightScrollLoc);
    await this.clickElement(this.rightScrollLoc);
    await this.validateElementText(this.secondDoc, "Dr Gomathi");
  }
}
