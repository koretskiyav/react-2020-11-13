import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { currentErrorRouteSelector } from '../redux/selectors';

function ErrorPage({ error }) {
  return (
    <>
      <h1>Error Page</h1>
      <p>{error}</p>
    </>
  );
}

export default connect(
  createStructuredSelector({
    error: currentErrorRouteSelector,
  })
)(ErrorPage);
