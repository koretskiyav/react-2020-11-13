import React from 'react';
import PropTypes from 'prop-types';
import styles from './tabs.module.css';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs }) => {
  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ id, title, to }) => {
          return (
            <NavLink
              key={id}
              to={to}
              className={styles.tab}
              activeClassName={styles.active}
            >
              {title}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
