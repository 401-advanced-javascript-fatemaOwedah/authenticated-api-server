'use strict';

const timestamp =require('../middleware/timestamp');
let req = {};
let res = {};
let next = jest.fn();

describe('timestamp ', () => {

  it('addt', () => {
    timestamp(req, res, next);
    expect(req.requestTime).toBeDefined();
  });

  it('moved to next', () => {
    timestamp(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});