import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { averageRatingSelector } from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

const Restaurant = ({ id, name, averageRating }) => {
  const tabs = [
    { title: 'Menu', content: <Menu restaurantId={id} /> },
    {
      title: 'Reviews',
      content: <Reviews restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

const mapStateToProps = (state, props) => ({
  averageRating: averageRatingSelector(state, props),
});

export default connect(mapStateToProps, { loadProducts })(Restaurant);
