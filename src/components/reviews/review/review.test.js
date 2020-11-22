import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from '../review';

import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should user matches or anonymous', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"] [data-id="user"]').text()).toEqual(
      review.user || 'Anonymous'
    );
  });

  it('should text matches', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"] [data-id="text"]').text()).toEqual(
      review.text
    );
  });
});
