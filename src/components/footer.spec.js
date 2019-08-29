import React from 'react';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Footer from './footer';

configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
