import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  describe('should render', () => {
    it('component', () => {
      const wrapper = mount(<Reviews reviews={reviews} />);
      expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
    });

    it('all component children', () => {
      const wrapper = mount(<Reviews reviews={reviews} />);
      expect(wrapper.find('[data-id="reviews"]').props().children.length).toBe(
        2
      );
    });
  });

  describe('should not render any children ', () => {
    it('with empty array of reviews', () => {
      const wrapper = mount(<Reviews reviews={[]} />);
      expect(wrapper.find('[data-id="reviews"]').props().children.length).toBe(
        0
      );
    });

    it('with undefined reviews', () => {
      const wrapper = mount(<Reviews reviews={undefined} />);
      expect(wrapper.find('[data-id="reviews"]').props().children.length).toBe(
        0
      );
    });
  });
});
