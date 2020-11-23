import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={[]} />);

    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
});
