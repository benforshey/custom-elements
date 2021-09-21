import { newE2EPage } from '@stencil/core/testing';

describe('time-display-binary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<time-display-binary></time-display-binary>');

    const element = await page.find('time-display-binary');
    expect(element).toHaveClass('hydrated');
  });
});
