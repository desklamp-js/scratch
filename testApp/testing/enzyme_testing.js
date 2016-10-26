import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
var jsdom = require('jsdom').jsdom;

import { Link, AsyncLink, Container, Desklamp } from 'desklamp';
// from './../src/index.js'; // relative path working, does not like document.getElementById in index

// Store this DOM and the window in global scope ready for React to access
global.document = jsdom('');
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };

describe('Link', () => {
  it('Link renders a single anchor tag', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.find('a')).to.have.length(1);
  });
  it('Link component with tag has property tag equal to text', () => {
    const wrapper = shallow(<Link tag="imatag" view="/hi" />);
    expect(wrapper.props().children).to.equal('imatag');
    expect(wrapper.props().href).to.equal('#/hi');
  });
  it('Link component with tag has text equal to text', () => {
    const wrapper = shallow(<Link tag="imatag" view="/hi" />);
    expect(wrapper.find('a').html()).to.include('imatag');
  });
});

describe('AsyncLink', () => {
  it('AsyncLink renders a single anchor tag', () => {
    const wrapper = shallow(<AsyncLink />);
    expect(wrapper.find('a')).to.have.length(1);
  });
  it('AsyncLink component with tag has property tag equal to text', () => {
    const wrapper = shallow(<AsyncLink view="/bye" tag="imatag" />);
    expect(wrapper.props().children).to.equal('imatag');
    expect(wrapper.props().href).to.equal('#/bye');
  });
  it('AsyncLink component with tag has text equal to text', () => {
    const wrapper = shallow(<AsyncLink tag="imatag" view="/hi" />);
    expect(wrapper.find('a').html()).to.include('imatag');
  });
  it('AsyncLink component executed function passed in', () => {
    const onButtonClick = sinon.spy();
    const Containy = mount(<Container><Link /></Container>);
    const wrapper = shallow(<AsyncLink tag="imatag" view="/hi" func={onButtonClick} />);
    wrapper.find('a').simulate('click', { preventDefault: () => undefined });
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});

const Test = () => {
  return (
    <div className="home">
      <h1>This the home page</h1>
    </div>
  );
};

describe('Container', () => {
  it('Container child component has state ', () => {
    const wrapper = mount(<Container><Test /><Link/></Container>);
    // console.log(wrapper.childAt(1).name())
    expect(wrapper.find(Test).props()).to.have.property('state');
  });
});