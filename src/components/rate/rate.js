import React, { useMemo } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Rate = (props) => {
  //console.log('[rate] props', props)
  const { reviews } = props;

  const avarageRating = useMemo(() => {
    const rating = reviews.reduce((acc, { rating }, index, array) => {
      if (index !== array.length - 1) {
        return acc + rating;
      }
      return (acc + rating) / 2;
    }, 0);
    if (typeof rating === 'number') {
      return `${rating}`.match(/\d+(\.\d)?/)[0];
    }
  }, [reviews]);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Средний рейтинг меню:</Typography>
        <Rating
          name="read-only"
          max={10}
          value={+avarageRating}
          precision={0.5}
          readOnly
        />
      </Box>
    </div>
  );
};

export default Rate;
