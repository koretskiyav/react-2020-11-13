import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Product', () => {
  it('should review render', () => {
    const wrapper = mount(
      <Review user={review.user} text={review.text} rating={review.rating} />
    );
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should review user name render', () => {
    const wrapper = mount(
      <Review user={review.user} text={review.text} rating={review.rating} />
    );
    expect(wrapper.find('[data-id="review-name"]').text()).toBe(
      review.user || 'Anonymous'
    );
  });

  it('should review user comment render', () => {
    const wrapper = mount(
      <Review user={review.user} text={review.text} rating={review.rating} />
    );
    expect(wrapper.find('[data-id="review-comment"]').text()).toBe(
      review.text || ''
    );
  });
});
