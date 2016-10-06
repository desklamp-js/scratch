import React from 'react';
import { shallow } from 'enzyme';
import { expect, describe, it } from 'chai';
import sinon from 'sinon';

import { Container } from './../deployment/desklamp.js';
// from './../src/index.js'; // relative path working, does not like document.getElementById in index

describe(<Container />, () => {
  it('has some components in it', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.isValidElement).to.equal(true);
  });
});
