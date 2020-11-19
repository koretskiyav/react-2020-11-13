import React from 'react';
import Menu from '../menu';
import * as classes from './restaurant.module.css';
import Reviews from '../reviews';

const Restaurant = (props) => {
  //console.log('[restaurant] props', props)
  const { restaurant } = props;

  return (
    <div className={classes.Restaurant}>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};

export default Restaurant;
