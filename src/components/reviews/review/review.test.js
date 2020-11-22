import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Review', () => {
  reviews.forEach((review) => {
    it(`should render ${review.id}`, () => {
      const wrapper = mount(<Review {...review} />);
      expect(wrapper.find('[data-id="review"]').length).toBe(1);
    });

    it(`render correct name of ${review.id}`, () => {
      const wrapper = mount(<Review {...review} />);
      expect(wrapper.find('[data-id="review-user"]').text()).toEqual(
        review.user
      );
    });

    it(`render correct text of ${review.id}`, () => {
      const wrapper = mount(<Review {...review} />);
      expect(wrapper.find('[data-id="review-text"]').text()).toEqual(
        review.text
      );
    });
  });
});
