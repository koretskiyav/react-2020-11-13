import React from 'react';
import { connect } from 'react-redux';
import useForm from '../../../hooks/use-form';

import Rate from '../../rate';
import styles from './review-form.module.css';

import { addReview } from '../../../redux/actions';

import Button from '../../button';

const INITIAL_VALUES = { name: '', text: '', rate: 5 };

const ReviewForm = ({ onSubmit, restaurantId }) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);
  values.restaurantId = restaurantId;

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(values);
    reset();
  };

  return (
    <div className={styles.reviewForm}>
      <h4 className={styles.addReviewTitle}>Leave your review</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.reviewFormItem}>
          <input
            placeholder="Your name"
            className={styles.message}
            {...handlers.name}
          />
        </div>
        <div className={styles.reviewFormItem}>
          <textarea
            placeholder="Your review"
            className={styles.message}
            {...handlers.text}
          />
        </div>
        <div className={styles.rateWrap}>
          <span>Rating: </span>
          <span>
            <Rate {...handlers.rate} />
          </span>
        </div>
        <div className={styles.publish}>
          <Button primary block>
            PUBLISH REVIEW
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => dispatch(addReview(values)),
});
//dispatch(addReview(values))
export default connect(null, mapDispatchToProps)(ReviewForm);
