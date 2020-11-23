import React, { useMemo } from 'react';
import { arrayOf, shape, string, number, object } from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.restaurant}>
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: shape({
    name: string.isRequired,
    menu: arrayOf(object).isRequired,
    reviews: arrayOf(
      shape({
        rating: number,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default Restaurant;
