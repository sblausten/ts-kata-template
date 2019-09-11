import { expect } from 'chai';
import { createSandbox } from 'sinon';
import { notImplemented } from '../src/index';

const sandbox = createSandbox();

describe('notImplemented', () => {
  it('should return null', () => {
    const result = notImplemented();

    expect(result).to.equal(null);
  });
});
