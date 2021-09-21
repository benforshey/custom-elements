import { newSpecPage } from '@stencil/core/testing';
import { TimeDisplayBinary } from '../time-display-binary';

describe('time-display-binary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TimeDisplayBinary],
      html: `<time-display-binary></time-display-binary>`,
    });
    expect(page.root).toEqualHtml(`
      <time-display-binary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </time-display-binary>
    `);
  });
});
