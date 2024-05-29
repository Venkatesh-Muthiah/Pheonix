import { Locator, Page, expect } from "@playwright/test";
import { basePage } from "./basePage";
import { faker } from "@faker-js/faker";

//importing testdata's
const testDataURL = JSON.parse(
  JSON.stringify(require("../testData/urls.json"))
);

export class therapiesPage extends basePage {
  readonly therapiesLoc: Locator;
  readonly dropdownArrowLoc: Locator;
  readonly menuListLoc: Locator;
  readonly dropdownArrowCloseLoc: Locator;
  readonly productsTab: Locator;

  constructor(protected page: Page) {
    super(page);
    this.menuListLoc = page.getByRole("menu");
    this.dropdownArrowCloseLoc = page.locator(
      "//div[@class='MuiBackdrop-root MuiBackdrop-invisible MuiModal-backdrop css-esi9ax']"
    );
    this.productsTab = page.getByRole("tab", { name: "PRODUCTS" });
  }
  public async openApplication() {
    await this.page.goto(testDataURL.products);
    await this.waitTillNetworkIdle();
  }
  public async clickingOnSubmenus(menu: string) {
    await this.waitTillNetworkIdle();
    await this.clickElement(this.page.getByText(`${menu}`));
    await this.waitTillNetworkIdle();
    await this.clickElement(
      this.page
        .locator("p")
        .filter({ hasText: `${menu}` })
        .getByTestId("ExpandMoreIcon")
    );
    await this.elementUiTesting(this.menuListLoc, `${menu}list.png`);
    //await this.clickElement(this.dropdownArrowCloseLoc);
    await this.reloadPage();
  }
}
