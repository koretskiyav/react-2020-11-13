import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './error-page.module.css';
import { errorSelector } from '../redux/selectors';

function ErrorPage({ error }) {
  return <h1 className={styles.error}>Error{error && `: ${error}`}</h1>;
}

const mapStateToProps = createStructuredSelector({
  error: errorSelector,
});

export default connect(mapStateToProps)(ErrorPage);
