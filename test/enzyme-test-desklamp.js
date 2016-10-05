import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import {Desklamp} from './../deployment/desklamp.js'
// from './../src/index.js'; // relative path working, does not like document.getElementById in index

describe('<Desklamp />', () =>{
  it('has some components in it', () => {
    const wrapper = shallow(<Desklamp />);
    expect(wrapper.isValidElement).to.equal(true);
  });
  
});