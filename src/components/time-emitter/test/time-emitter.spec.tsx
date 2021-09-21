import { newSpecPage } from '@stencil/core/testing';
import { TimeEmitter } from '../time-emitter';

describe('time-emitter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TimeEmitter],
      html: `<time-emitter></time-emitter>`,
    });
    expect(page.root).toEqualHtml(`
      <time-emitter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </time-emitter>
    `);
  });
});
