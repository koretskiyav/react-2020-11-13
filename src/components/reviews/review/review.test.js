import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should render content', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should user', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review-user"]').exists()).toEqual(true);
  });

  it('should text', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review-text"]').exists()).toEqual(true);
  });
});
