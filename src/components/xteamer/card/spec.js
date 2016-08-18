import React from 'react';
import Card from './';
import TestUtils from 'react-addons-test-utils';

var component;
describe('Card', () => {

    beforeEach(() => {
      component = TestUtils.renderIntoDocument(<Card/>);
    });

    it('is defined', () => {
      expect(component).to.exist;
    });


});
