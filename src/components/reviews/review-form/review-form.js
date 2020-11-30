import React from 'react';
import useForm from '../../../hooks/use-form';

import { addreview } from '../../../redux/actions';

import Rate from '../../rate';
import styles from './review-form.module.css';
import { connect } from 'react-redux';
import Button from '../../button';

const INITIAL_VALUES = { name: '', text: '', rate: 5 };

// const ReviewForm = ({ onSubmit }) => {
const ReviewForm = (props) => {
  const onSubmit = props.onSubmit;
  const activeRestaurant = props.activeRestaurant;

  const { values, handlers, reset } = useForm(INITIAL_VALUES);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(values, activeRestaurant);
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

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values, activeRestaurant) => {
      dispatch(
        addreview({
          name: values.name,
          rating: values.rate,
          text: values.text,
          activeRestaurant: activeRestaurant,
        })
      );
    },
  };
}

const mapStateToProps = (state) => ({
  activeRestaurant: state.activeRestaurant,
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
