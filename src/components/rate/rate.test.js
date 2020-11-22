import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from '../rate';

import { restaurants } from '../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const rating = restaurants[0].reviews[0].rating;

describe('Rate', () => {
  it('should render', () => {
    const wrapper = mount(<Rate value={rating} />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
  });

  it('should stars count and rating matches', () => {
    const wrapper = mount(<Rate value={rating} />);
    expect(wrapper.find('[data-id="rate"] [checked=true]').length).toBe(rating);
  });
});
