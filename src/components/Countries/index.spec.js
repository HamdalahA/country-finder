import React from 'react';
import { shallow, configure } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';

import Countries from './index.js';

configure({ adapter: new Adapter() });

describe('Countries snapshot', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Countries />);
    expect(wrapper).toMatchSnapshot();
  });
});
