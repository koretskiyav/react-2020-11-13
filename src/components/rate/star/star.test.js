import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Star from './star';

Enzyme.configure({ adapter: new Adapter() });

describe('Star', () => {
  it('should render', () => {
    const wrapper = mount(<Star />);
    expect(wrapper.find('[data-id="star"]').length).toBe(1);
  });

  it('should render unchecked star by default', () => {
    const wrapper = mount(<Star />);
    expect(wrapper.find('[data-checked="false"]').length).toBe(1);
  });

  it('should render checked star', () => {
    const wrapper = mount(<Star checked={true} />);
    expect(wrapper.find('[data-checked="true"]').length).toBe(1);
  });
});
