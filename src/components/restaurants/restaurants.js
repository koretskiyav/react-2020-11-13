import React, { useMemo, useState } from 'react';
import Navigation from '../navigation';
import Restaurant from '../restaurant';
import * as classes from './restaurants.module.css';

export default function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(0);

  const activeRestaurant = useMemo(() => {
    return restaurants.find(({ id }) => {
      return id === activeId;
    });
  }, [activeId, restaurants]);

  return (
    <div className={classes.Restaurants}>
      <Navigation onRestaurantClick={setActiveId} restaurants={restaurants} />
      {activeRestaurant && (
        <Restaurant restaurant={activeRestaurant} activeId={activeId} />
      )}
    </div>
  );
}
