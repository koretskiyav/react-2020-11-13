import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Reviews from './reviews';
import Review from './review';
import { restaurants } from '../../fixtures';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
  it('should check the amount of the rendered child Review components', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find(Review).length).toBe(2);
  });
  it('should check the type of the tag of the first element', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.childAt(0).type()).toEqual('div');
  });
});
