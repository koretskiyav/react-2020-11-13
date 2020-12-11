import React from 'react';
import { connect } from 'react-redux';

const errorPage = ({ title = 'error page' }) => <h1>{title}</h1>;

export default connect((state) => ({
  title: state.router.location.state,
}))(errorPage);
