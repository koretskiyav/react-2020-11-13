import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from './rate';

Enzyme.configure({ adapter: new Adapter() });

describe('Rate', () => {
  it('should render', () => {
    const wrapper = mount(<Rate />);

    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
  });

  it('should render 5 stars by default', () => {
    const wrapper = mount(<Rate />);

    expect(wrapper.find('[data-id="star"]').length).toBe(5);
  });

  it('should render 4 checked star', () => {
    const wrapper = mount(<Rate value={4} />);

    expect(wrapper.find('[data-checked="true"]').length).toBe(4);
  });
});
