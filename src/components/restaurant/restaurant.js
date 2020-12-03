import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {
  averageRatingSelector,
  productsSelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';
import Loader from '../loader';

const Restaurant = ({
  id,
  name,
  products,
  reviews,
  averageRating,
  loadProducts,
  loading,
  loaded,
}) => {
  useEffect(() => {
    loadProducts(id);
  }, [id]); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  const tabs = [
    { title: 'Menu', content: <Menu menu={products} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={id} />,
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
  products: productsSelector(state),
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
});

export default connect(mapStateToProps, { loadProducts })(Restaurant);
