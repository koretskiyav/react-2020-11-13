import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rate from '../rate';
import * as classes from './reviews.module.css';

const Reviews = (props) => {
  //console.log('[reviews] props', props)
  const { reviews } = props;

  const comment = reviews.map((el) => (
    <div className={classes.Comment} key={el.id}>
      <h5>{el.user}</h5>
      <p>{el.text}</p>
      <Box
        className={classes.MuiBoxRoot}
        component="fieldset"
        mb={3}
        borderColor="transparent"
      >
        <Typography component="legend">Оценка:</Typography>
        <Rating
          name="read-only"
          max={10}
          value={+el.rating}
          precision={0.5}
          readOnly
        />
      </Box>
    </div>
  ));

  return (
    <div className={classes.Reviews}>
      <Rate reviews={props.reviews} />
      {comment}
    </div>
  );
};

export default Reviews;
