import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadReviews = (restaurantId) => async (dispatch, getState) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST, payload: { restaurantId } });
  try {
    const [response] = await Promise.all([
      fetch(`/api/reviews?id=${restaurantId}`).then((res) => res.json()),
      getState().users.loaded ? Promise.resolve() : loadUsers(dispatch),
    ]);

    dispatch({
      type: LOAD_REVIEWS + SUCCESS,
      response,
      payload: { restaurantId },
    });
  } catch (error) {
    dispatch({
      type: LOAD_REVIEWS + FAILURE,
      error,
      payload: { restaurantId },
    });
  }
};

export const loadUsers = async (dispatch) => {
  dispatch({ type: LOAD_USERS + REQUEST });
  try {
    const response = await fetch('/api/users').then((res) => res.json());

    dispatch({
      type: LOAD_USERS + SUCCESS,
      response,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USERS + FAILURE,
      error,
    });
  }
};

export const loadProducts = (restaurantId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${restaurantId}`,
  restaurantId,
});
