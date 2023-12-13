import { FormatUsernamePipe } from './format-username.pipe';

describe('FormatUsernamePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatUsernamePipe();
    expect(pipe).toBeTruthy();
  });
});
