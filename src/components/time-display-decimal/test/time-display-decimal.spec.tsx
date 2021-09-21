import { newSpecPage } from "@stencil/core/testing";
import { TimeDisplayDecimal } from "../time-display-decimal";

describe("time-display-decimal", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [TimeDisplayDecimal],
      html: `<time-display-decimal></time-display-decimal>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <time-display-decimal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </time-display-decimal>
    `);
  });
});
