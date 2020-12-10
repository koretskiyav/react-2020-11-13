import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { errorTextSelector } from '../redux/selectors';

function ErrorPage({ errorText }) {
  return (
    <>
      <h1>Error</h1>
      <h3>{errorText}</h3>
    </>
  );
}

export default connect(
  createStructuredSelector({
    errorText: errorTextSelector,
  })
)(ErrorPage);
