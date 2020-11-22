import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from '../reviews';
import Review from '../reviews/review';

import { restaurants } from '../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should childs count', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length);
  });

  it('should user matches or anonymous', () => {
    const wrapper = mount(<Review {...reviews[0]} />);
    expect(wrapper.find('[data-id="review"] [data-id="user"]').text()).toEqual(
      reviews[0].user || 'Anonymous'
    );
  });

  it('should text matches', () => {
    const wrapper = mount(<Review {...reviews[0]} />);
    expect(wrapper.find('[data-id="review"] [data-id="text"]').text()).toEqual(
      reviews[0].text
    );
  });
});
