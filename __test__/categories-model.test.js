'use strict';

require('@code-fellows/supergoose');

const caModel = require('../models/categories/categories-model');

let testObj = {
  name: 'Tea',
  display_name: 'libton',
  description: 'delecious',
};
describe('Model Category', () =>{
  it('can post()', ()=> {
    return caModel.post(testObj)
      .then(record => {
        Object.keys(testObj).forEach(key=> {
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });
  
  it('can get()', ()=> {
    return caModel.get()
      .then(results => {
        Object.keys(testObj).forEach(key=> {
          expect(results[0][key]).toEqual(testObj[key]);
        });
      });
  });
  it('can get()Id', ()=> {
    let testObj1 = {
      name: 'Teasadsad',
      display_name: 'libtonasd',
      description: 'delecioussadsa',
    };
    return caModel.post(testObj1)
      .then(results => {
        return caModel.get(results._id)
          .then(testObj =>{
            Object.keys(testObj1).forEach(key=> {
              expect(testObj[0][key]).toEqual(testObj1[key]);
            });
          });
      });
  });
  it('can update()', ()=> {
    let testObj2 = {
      name: 'Teasadsad',
      display_name: 'libtonasd',
      description: 'delecioussadsa',
    };
    let testObj3 = {
      name: 'aaaaa',
      display_name: 'aaaaa',
      description: 'aaaaa',
    };
    return caModel.post(testObj2)
      .then(results => {
        return caModel.update(results._id,testObj3)
          .then(testObj2 =>{
            Object.keys(testObj2).forEach(key=> {
              expect(testObj[key]).toEqual(testObj3[key]);
            });
          });
      });
  });
  it('can delete()', ()=> {
    let testObj2 = {
      name: 'Teasadsad',
      display_name: 'libtonasd',
      description: 'delecioussadsa',
    };
    return caModel.post(testObj2)
      .then(results => {
        return caModel.delete(results._id)
          .then(output =>{
            Object.keys(testObj2).forEach(key=> {
              expect(testObj[key]).toEqual(testObj[key]);
            });
          });
      });
  });
});