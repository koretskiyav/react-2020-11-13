import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { restaurants } from '../../fixtures';
import Reviews from '../reviews/reviews';

Enzyme.configure({ adapter: new Adapter() });

const restaurant = restaurants[0];
const reviews = restaurant.reviews;

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should render items', () => {
    const shouldHaveChildren = reviews.length;
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(shouldHaveChildren);
  });

  it('should show anonymous when no user is specified', () => {
    const noUserReviews = reviews.map(({ id, user, text, rating }) => ({
      id,
      text,
      rating,
    }));
    const wrapper = mount(<Reviews reviews={noUserReviews} />);
    expect(wrapper.find('[data-id="reviewer-name"]').first().text()).toBe(
      'Anonymous'
    );
  });

  it('should warn, when no rating is specified', () => {
    const noRatingReviews = reviews.map(({ id, user, text, rating }) => ({
      id,
      user,
      text,
    }));
    console.error = jest.fn();
    mount(<Reviews reviews={noRatingReviews} />);
    expect(console.error).toHaveBeenCalled();
  });
});
