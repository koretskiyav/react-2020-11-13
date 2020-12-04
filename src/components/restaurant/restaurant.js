import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import Loader from '../loader';
import { loadReviews } from '../../redux/actions';
import {
  averageRatingSelector as averageRating,
  isRestaurantReviewsLoading as isReviewsLoading,
  isRestaurantReviewsLoaded as isReviewsLoaded
} from '../../redux/selectors';

const Restaurant = ({ id, name, menu, reviews, averageRating, loadReviews, isReviewsLoading, isReviewsLoaded }) => {
  useEffect(() => {
    if (!isReviewsLoading && !isReviewsLoaded) loadReviews(id);
  }, [isReviewsLoading, isReviewsLoaded, loadReviews, id]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} restaurantId={id} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        {
          isReviewsLoading || !isReviewsLoaded
            ? <Loader />
            : <Rate value={averageRating} />
        }
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

const mapStateToProps = createStructuredSelector({
  isReviewsLoading,
  isReviewsLoaded,
  averageRating
});

export default connect(mapStateToProps, { loadReviews })(Restaurant);
