import { newSpecPage } from '@stencil/core/testing';
import { TimeDisplay } from '../time-display';

describe('time-display', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TimeDisplay],
      html: `<time-display></time-display>`,
    });
    expect(page.root).toEqualHtml(`
      <time-display>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </time-display>
    `);
  });
});
