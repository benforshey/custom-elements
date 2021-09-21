import { newE2EPage } from "@stencil/core/testing";

describe("time-emitter", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<time-emitter></time-emitter>");

    const element = await page.find("time-emitter");
    expect(element).toHaveClass("hydrated");
  });
});
