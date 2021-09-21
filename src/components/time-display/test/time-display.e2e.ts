import { newE2EPage } from "@stencil/core/testing";

describe("time-display", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<time-display></time-display>");

    const element = await page.find("time-display");
    expect(element).toHaveClass("hydrated");
  });
});
