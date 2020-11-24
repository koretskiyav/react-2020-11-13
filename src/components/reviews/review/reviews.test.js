import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];
const anonymousReview = { ...review, user: undefined };

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should have proper username', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-username"]').text()).toBe(
      review.user
    );
  });

  it('should have proper comment', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-comment"]').text()).toBe(review.text);
  });

  it('should have proper anonymous username', () => {
    const wrapper = mount(<Review {...anonymousReview} />);
    expect(wrapper.find('[data-id="review-username"]').text()).toBe(
      'Anonymous'
    );
  });

  it('should have proper rating', () => {
    //Драйвер здесь так и напрашивается
    const wrapper = mount(<Review {...review} />);
    expect(
      wrapper.find('[data-id="review-rate"] [data-id="rating-star"]')
    ).toHaveLength(review.rating);
  });
});
