import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import Rate from '../../rate';

Enzyme.configure({ adapter: new Adapter() });

const review = {
  id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
  user: 'Antony',
  text: 'Not bad',
  rating: 5,
};

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should render user name', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe(review.user);
  });

  it('should render text', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe(review.text);
  });

  it('should render rating', () => {
    const wrapper = mount(<Review {...review} />);
    const rate = wrapper.find(Rate);
    expect(rate.length).toBe(1);
    expect(rate.prop('value')).toBe(review.rating);
  });
});