import { expect } from 'chai';
import { notImplemented } from '../src';

describe('notImplemented', () => {
  it('should return null', () => {
    const result = notImplemented();

    expect(result).to.equal(null);
  });
});
