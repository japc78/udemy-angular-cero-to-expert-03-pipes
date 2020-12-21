import { CustomHidePasswordPipe } from './custom-hide-password.pipe';

describe('CustomHidePasswordPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomHidePasswordPipe();
    expect(pipe).toBeTruthy();
  });
});
