import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import Review from './review';

Enzyme.configure({ adapter: new Adapter() });

const reviews = [
  {
    id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
    user: 'Antony',
    text: 'Not bad',
    rating: 5,
  },
  {
    id: '429dea85-11dd-4054-a31e-c60c92e17255',
    user: 'Sam',
    text: 'No burgers',
    rating: 3,
  }
];

describe('Reviews', () => {
  it('should render review list', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    const reviewsWrapper = wrapper.find(Review);

    expect(reviewsWrapper.length).toBe(reviews.length);

    reviewsWrapper.forEach((review, i) => {
      expect(review.key()).toBe(reviews[i].id);
      expect(review.props()).toMatchObject(reviews[i]);
    });
  });
});