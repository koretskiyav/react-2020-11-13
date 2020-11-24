import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review ', () => {
  it('should user', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-test="review-user"]').text()).toBe('Antony');
  });

  it('should rating', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-test="review-rating"]').text()).toBe('5');
  });
});
