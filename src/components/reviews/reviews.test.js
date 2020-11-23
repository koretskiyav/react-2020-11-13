import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import Review from './review';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;
const review = reviews[0];

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should have author', () => {
    const wrapper = mount(<Review key={review.id} {...review} />);
    expect(wrapper.find('[data-id="review-author"]').text()).toContain(
      review.user
    );
  });

  it('should have rating', () => {
    const wrapper = mount(<Review key={review.id} {...review} />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
  });
});
