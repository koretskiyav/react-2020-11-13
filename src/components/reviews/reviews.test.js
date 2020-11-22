import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should have at least one review', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review-0"]').exists()).toEqual(true);
  });

  it('should pass correct props values to Review child', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review-0"]').props().user).toEqual('Antony');
    expect(wrapper.find('[data-id="review-0"]').props().text).toEqual(
      'Not bad'
    );
    expect(wrapper.find('[data-id="review-0"]').props().rating).toEqual(5);
  });

  it('should create correct number of reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').children()).toHaveLength(
      reviews.length
    );
  });
});
