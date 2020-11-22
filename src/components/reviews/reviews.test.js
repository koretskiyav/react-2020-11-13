import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;
const review = restaurants[0].reviews[0];

describe('Reviews', () => {
  it('should render reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should render review', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(2);
  });
});
