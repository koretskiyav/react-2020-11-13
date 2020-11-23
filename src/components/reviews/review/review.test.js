import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review />);

    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should render user name', () => {
    const userName = 'Jon';
    const wrapper = mount(<Review user={userName} />);

    expect(wrapper.find('[data-id="review-user"]').text()).toBe(userName);
  });

  it('should render review text', () => {
    const reviewText = 'great';
    const wrapper = mount(<Review text={reviewText} />);

    expect(wrapper.find('[data-id="review-text"]').text()).toBe(reviewText);
  });

  it('should render rating', () => {
    const wrapper = mount(<Review />);

    expect(wrapper.find('[data-id="review-rate"]').length).toBe(1);
  });
});
