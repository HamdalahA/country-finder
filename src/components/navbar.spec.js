import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import NavBar from './navbar';

configure({ adapter: new Adapter() });

describe('NavBar', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
