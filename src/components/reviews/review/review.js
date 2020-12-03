import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../loader';
import Rate from '../../rate';
import styles from './review.module.css';
import { connect } from 'react-redux';

import {
  usersSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../../redux/selectors';

import { loadUsers } from '../../../redux/actions';

const Review = ({
  review: { userId, text, rating },
  users,
  loading,
  loaded,
  loadUsers,
}) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadUsers();
    }
  }, [users, loading, loaded, loadUsers]);

  if ((loading || !loaded) && !users) return <Loader />;

  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {users[userId]?.name}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }),
};

// export default connect((state, props) => ({
// review: reviewWitUserSelector(state, props),
// }))(Review);

export default connect(
  (state, ownProps) => ({
    users: usersSelector(state),
    loading: usersLoadingSelector(state),
    loaded: usersLoadedSelector(state),
  }),
  { loadUsers }
)(Review);
