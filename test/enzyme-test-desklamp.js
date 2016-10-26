import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import jsdom from 'jsdom';

import {Link} from 'desklamp'
// from './../src/index.js'; // relative path working, does not like document.getElementById in index

describe('Link', () =>{
  it('Link renders a single anchor tag', () => {
    const wrapper = shallow(<Link />);
    console.log(wrapper.props);
    wrapper.setState({view: "Profile"});

    wrapper.instance().routeLink(testInnerHtmlMock);
    expect(wrapper.state('view')).to.not.equal('');
  });
});
