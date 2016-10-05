import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import jsdom from 'jsdom';

import {Container} from './../deployment/desklamp.js'
// from './../src/index.js'; // relative path working, does not like document.getElementById in index

describe('Container', () =>{
  it('Container.routeLink updates view in state', () => {
    const wrapper = shallow(<Container />);

    console.log(wrapper.props);
    const testInnerHtmlMock = "Login";
    wrapper.setState({view: "Profile"});

    wrapper.instance().routeLink(testInnerHtmlMock);
    expect(wrapper.state('view')).to.not.equal('');
  });
});
