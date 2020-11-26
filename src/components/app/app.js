import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addData } from '../../redux/actions';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';

const App = ({ restaurants, addData }) => {
  useEffect(() => {
    addData(restaurants);
  }, [restaurants]); // eslint-disable-line

  return (
    <div>
      <Header />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addData: () => dispatch(addData(ownProps.restaurants)),
});

export default connect(null, mapDispatchToProps)(App);
