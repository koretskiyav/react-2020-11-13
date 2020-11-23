import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const { user, text, rating } = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review user={user} text={text} rating={rating} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should render name', () => {
    const wrapper = mount(<Review user={user} text={text} rating={rating} />);
    expect(wrapper.find('[data-id="name"]').text()).toBe(
      user ? user : 'Anonymous'
    );
  });

  it('should render text', () => {
    const wrapper = mount(<Review user={user} text={text} rating={rating} />);
    expect(wrapper.find('[data-id="text"]').text()).toBe(text);
  });
});
