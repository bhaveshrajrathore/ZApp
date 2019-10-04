import 'react-native';
import React from 'react';
// import render from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { Question } from '../../screens/assessment/Question';
import Profile from './Profile';

configure({ adapter: new Adapter() });

it('testing the props', () => {
  const wrapper = shallow(<Profile data="ZingUp" />).props();
  // console.log(JSON.stringify(wrapper));
  // console.log(wrapper.children[1].props.children.props.children);

  expect(wrapper.children[1].props.children.props.children).toEqual('ZingUp');
});
