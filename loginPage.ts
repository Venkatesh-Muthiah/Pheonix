import { Locator, Page, expect } from "@playwright/test";
import { basePage } from "./basePage";

export class loginPage extends basePage {
  readonly emailLoc: Locator;
  readonly passwordLoc: Locator;
  readonly loginButtonLoc: Locator;
  readonly alertLoc: Locator;
  readonly alertMessage: Locator;
  readonly BrandnameLoc: Locator;
  readonly LoginTextLoc: Locator;

  constructor(protected page: Page) {
    super(page);
    this.emailLoc = page.getByPlaceholder("Email");
    this.passwordLoc = page.getByPlaceholder("Password");
    this.loginButtonLoc = page.getByRole("button", { name: "Login" });
    this.alertLoc = page.getByRole("alert");
  }
  async openApplication(url: string) {
    await this.page.goto(url);
  }

  async userLogin(email: string, password: string) {
    await this.fillText(this.emailLoc, email);
    await this.fillText(this.passwordLoc, password);
    await this.clickElement(this.loginButtonLoc);
  }

  async verifyAlert(expectedAlert: string) {
    const locatorOfAlert = this.alertLoc;
    await this.waitForElementToVisible(locatorOfAlert);
    await this.validateElementText(locatorOfAlert, expectedAlert);
    await this.waitForElementToHide(locatorOfAlert);
  }
}
