import { newSpecPage } from "@stencil/core/testing";
import { TimeDisplay } from "../time-display";

describe("time-display", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [TimeDisplay],
      html: `<time-display></time-display>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <time-display>
        <mock:shadow-root>
          <time>
            <slot></slot>
          </time>
        </mock:shadow-root>
      </time-display>
    `);
  });
});
