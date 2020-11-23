import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[1];

describe('Review', () => {
  it('should render review slot', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  describe('should render rating', () => {
    it('should render stars', () => {
      const wrapper = mount(<Review {...review} />);
      expect(wrapper.find('[data-id="star"]').length).toBe(5);
    });

    it('should render rating', () => {
      const wrapper = mount(<Review {...review} />);
      expect(wrapper.find('[data-id="star"][data-checked="true"]').length).toBe(
        review.rating
      );
    });
  });

  describe('should replace invalid prop with default value', () => {
    function makeTest({ defaultProp, key }) {
      it(`should paste "${defaultProp}" if invalid prop: "${key}"`, () => {
        let invalidProps = Object.assign({}, review);
        delete invalidProps[key];

        const wrapper = mount(<Review {...invalidProps} />);
        expect(wrapper.find(`[data-id="review-${key}"]`).text()).toBe(
          defaultProp
        );
      });
    }

    const cases = [
      {
        defaultProp: 'Anonymous',
        key: 'user',
      },
      {
        defaultProp: '',
        key: 'text',
      },
    ];

    for (const props of cases) {
      makeTest(props);
    }
  });
});
