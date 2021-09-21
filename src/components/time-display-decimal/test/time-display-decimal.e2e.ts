import { newE2EPage } from "@stencil/core/testing";

describe("time-display-decimal", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<time-display-decimal></time-display-decimal>");

    const element = await page.find("time-display-decimal");
    expect(element).toHaveClass("hydrated");
  });
});
