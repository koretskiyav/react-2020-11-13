import React from 'react';
import Menu from './menu';
import Rate from './Rate';
import Reviews from './Reviews';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant }) => {
  const restaurantRating = (
    restaurant.reviews.reduce((sum, review) => (sum += review.rating), 0) /
    restaurant.reviews.length
  ).toFixed(1);

  return (
    <div className={styles.restaurants}>
      <div className={styles.block}>
        <Menu menu={restaurant.menu} />
      </div>

      <div>
        <h2>Rating</h2>
        <Rate rating={restaurantRating} />
      </div>

      <div className={styles.block}>
        <Reviews reviews={restaurant.reviews} />
      </div>
    </div>
  );
};

export default Restaurant;
