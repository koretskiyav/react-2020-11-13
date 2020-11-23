import React from 'react';
import { string, oneOfType, arrayOf, element } from 'prop-types';

import styles from './banner.module.css';

import DefaultBanner from './banner.jpg';

const Banner = ({ img, heading, description, children }) => (
  <div className={styles.banner}>
    <img src={img} className={styles.img} alt="banner" />
    <div className={styles.caption}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
      <div>{children}</div>
    </div>
  </div>
);

Banner.defaultProps = {
  img: DefaultBanner,
};

Banner.propTypes = {
  heading: string.isRequired,
  img: string.isRequired,
  description: string,
  children: oneOfType([element, arrayOf(element)]),
};

export default Banner;
