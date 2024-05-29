import { Locator, Page, expect } from "@playwright/test";
import { basePage } from "./basePage";
import { faker } from "@faker-js/faker";

//importing testdata's
const testDataURL = JSON.parse(
  JSON.stringify(require("../testData/urls.json"))
);

export class bookAnAppointmentPage extends basePage {
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
  readonly bookAnAppointmentButton: Locator;
  readonly inPersonConsutationButton: Locator;
  readonly OnlineConsultationButton: Locator;
  readonly chennaiButton: Locator;
  readonly pollachiButton: Locator;
  readonly tenkasiButton: Locator;
  readonly doctor1Loc: Locator;
  readonly doctor2Loc: Locator;
  readonly doctor3Loc: Locator;
  readonly doctor4Loc: Locator;
  readonly doctor5Loc: Locator;
  readonly doctor6Loc: Locator;
  readonly fullNameLoc: Locator;
  readonly ageLoc: Locator;
  readonly emailLoc: Locator;
  readonly phoneNumberLoc: Locator;
  readonly messageLoc: Locator;
  readonly resetButton: Locator;
  readonly ConfirmButton: Locator;
  readonly yesComingButton: Locator;
  readonly selectYourDateLoc: Locator;
  readonly slotsTimingButtonLoc: Locator;
  readonly pickTheDate: Locator;
  readonly listDocLoc: Locator;
  readonly slotTimingInput: Locator;
  readonly chooseHour: Locator;
  readonly chooseMeridiem: Locator;
  readonly chooseMin: Locator;
  readonly okBtn: Locator;
  readonly consultationLoc: Locator;
  readonly centreLoc: Locator;
  readonly doctorLoc: Locator;
  readonly rootLoc: Locator;
  readonly alertLoc: Locator;

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

    this.bookAnAppointmentButton = page.getByRole("button", {
      name: "Book an Appointment",
    });
    this.inPersonConsutationButton = page.locator(
      "//p[text()='In - Person Consultation']"
    );
    this.OnlineConsultationButton = page.locator(
      "//p[text()='Online Consultation']"
    );
    this.chennaiButton = page.locator("//p[text()='Chennai']");
    this.pollachiButton = page.locator("//p[text()='Pollachi']");
    this.tenkasiButton = page.locator("//p[text()='Tenkasi']");
    this.doctor1Loc = page
      .locator(
        "//div[@class='MuiGrid-root MuiGrid-container css-gecbg8']//div[1]"
      )
      .nth(1);

    this.doctor2Loc = page
      .locator(
        "//div[@class='MuiGrid-root MuiGrid-container css-gecbg8']//div[2]"
      )
      .nth(1);

    this.doctor3Loc = page
      .locator(
        "//div[@class='MuiGrid-root MuiGrid-container css-gecbg8']//div[3]"
      )
      .nth(1);

    this.doctor4Loc = page
      .locator(
        "//div[@class='MuiGrid-root MuiGrid-container css-gecbg8']//div[4]"
      )
      .nth(1);

    this.doctor5Loc = page
      .locator(
        "//div[@class='MuiGrid-root MuiGrid-container css-gecbg8']//div[5]"
      )
      .nth(1);

    this.doctor6Loc = page
      .locator(
        "//div[@class='MuiGrid-root MuiGrid-container css-gecbg8']//div[6]"
      )
      .nth(1);

    this.fullNameLoc = page.getByPlaceholder("Enter your name");
    this.ageLoc = page.getByPlaceholder("Enter your age");
    this.emailLoc = page.getByPlaceholder("Enter your email");
    this.phoneNumberLoc = page.getByPlaceholder("Enter your phone number");
    this.messageLoc = page.getByPlaceholder("Enter your message");
    this.selectYourDateLoc = page.getByPlaceholder("Select date");
    this.slotTimingInput = page.getByPlaceholder("hh:mm aa");
    this.resetButton = page.getByRole("button", {
      name: "Reset",
    });
    this.ConfirmButton = page.getByRole("button", {
      name: "Confirm Right Click",
    });
    this.yesComingButton = page.getByRole("button", {
      name: "Right Click Yes, Coming",
    });
    this.okBtn = page.getByRole("button", { name: "OK" });
    this.consultationLoc = page.locator(
      "//p[text()='Your mode of consultation']/following-sibling::p"
    );
    this.centreLoc = page.locator(
      "//p[text()='Your selected center']/following-sibling::p"
    );
    this.doctorLoc = page.locator(
      "//p[text()='Your selected Doctor']/following-sibling::p"
    );
    this.rootLoc = page.locator("#root");
    this.alertLoc = page.getByRole("alert");
  }

  public async navigateToThistab() {
    await this.page.goto(testDataURL.products);
    await this.waitTillNetworkIdle();
    await this.clickElement(this.bookAnAppointmentButton);
  }

  public async bookingAnAppointment() {
    //Testdata's
    let fullname = faker.person.firstName();
    let age = faker.string.numeric(2);
    let email = faker.internet.email();
    let phonenumber = faker.string.numeric(10);
    let message = faker.lorem.paragraph();
    let futureDate = faker.number.int({ min: 0o06, max: 28 });
    let futureMonth = faker.number.int({ min: 0o01, max: 12 });
    let futureYear = faker.number.int({ min: 2024, max: 2030 });
    let futureHour = faker.number.int({ min: 0o1, max: 12 });
    let futureMin = faker.number.int({ min: 0o1, max: 60 });
    let ddmmyyyy = `${futureDate}-${futureMonth}-${futureYear}`;
    let hhmmaa = `${futureHour}:${futureMin} PM`;

    await this.clickElement(this.bookAnAppointmentButton);
    await this.clickElement(this.OnlineConsultationButton);
    await this.clickElement(this.tenkasiButton);
    await this.clickElement(this.doctor3Loc);

    //fill the details
    await this.waitTillNetworkIdle();
    await this.fillText(this.fullNameLoc, fullname);
    await this.fillText(this.ageLoc, age);
    await this.fillText(this.emailLoc, email);
    await this.fillText(this.phoneNumberLoc, phonenumber);
    await this.fillTextSequentially(
      this.selectYourDateLoc,
      //format - dd-mm-yyyy
      ddmmyyyy
    );
    await this.focusOnElement(this.slotTimingInput);
    await this.fillTextSequentially(
      this.slotTimingInput,
      //format - hh:mm aa
      hhmmaa
    );
    await this.fillText(this.messageLoc, message);
    await this.clickElement(this.ConfirmButton);
    await this.waitForElementToVisible(this.alertLoc);
    await this.validateElementText(this.alertLoc, "Details saved successfully");
    await this.waitForElementToHide(this.alertLoc);

    //verifying the inputs
    await this.validateElementText(this.consultationLoc, "Online Consultation");
    await this.validateElementText(this.centreLoc, "Tenkasi");
    await this.validateElementText(this.doctorLoc, "Dr. Gomathi");
    await this.validateElementText(this.rootLoc, fullname);
    await this.validateElementText(this.rootLoc, age);
    await this.validateElementText(this.rootLoc, email);
    await this.validateElementText(this.rootLoc, phonenumber);
    await this.validateElementText(this.rootLoc, message);
    //Need to change the format to dd/mm/yyyy in application
    await this.clickElement(this.yesComingButton);
    //need to handle timeout
    await this.waitForElementToVisible(this.alertLoc);
    await this.validateElementText(
      this.alertLoc,
      "Please check your email for appointment details"
    );
  }

  public async verifyingEntireUI() {
    await this.fullScreenUiTesting("bookanappointment.png");
  }

  public async verifyingAllTheDoctorsInTheList() {
    await this.printAllTheListElements(this.listDocLoc);
  }

  public async negativeValidation() {
    //Testdata's
    let fullname = faker.person.firstName();
    let age = faker.string.numeric(2);
    let email = faker.internet.email();
    let phonenumber = faker.string.numeric(10);
    let message = faker.lorem.paragraph();
    let futureDate = faker.number.int({ min: 32, max: 99 });
    let futureMonth = faker.number.int({ min: 13, max: 99 });
    let futureYear = faker.number.int({ min: 2000, max: 2023 });
    let futureHour = faker.number.int({ min: 0o1, max: 12 });
    let futureMin = faker.number.int({ min: 0o1, max: 60 });
    let ddmmyyyy = `${futureDate}-${futureMonth}-${futureYear}`;
    let hhmmaa = `${futureHour}:${futureMin} PM`;

    await this.page.goto(testDataURL.products);
    await this.waitTillNetworkIdle();

    await this.clickElement(this.bookAnAppointmentButton);
    await this.waitTillNetworkIdle();
    await this.clickElement(this.OnlineConsultationButton);
    await this.clickElement(this.chennaiButton);
    await this.clickElement(this.doctor3Loc);

    //fill the details
    await this.waitTillNetworkIdle();
    await this.fillText(this.fullNameLoc, age);
    await this.fillText(this.ageLoc, age);
    await this.fillText(this.emailLoc, age);
    await this.fillText(this.phoneNumberLoc, fullname);
    await this.fillTextSequentially(
      this.selectYourDateLoc,
      // This is format - dd-mm-yyyy
      ddmmyyyy
    );
    await this.focusOnElement(this.slotTimingInput);
    await this.fillTextSequentially(
      this.slotTimingInput,
      // This is format - hh:mm aa
      hhmmaa
    );
    await this.waitUntil05SecondsExplicitly();
    await this.fillText(this.messageLoc, message);
    await this.clickElement(this.ConfirmButton);
    await this.waitForElementToVisible(this.alertLoc);
    await this.validateElementText(this.alertLoc, "Please fill the Name");
    await this.waitForElementToHide(this.alertLoc);
  }
}
