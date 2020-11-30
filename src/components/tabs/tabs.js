import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './tabs.module.css';

const Tabs = ({ tabs, initialActiveTab = 0, onChange }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const { content } = tabs[activeTab];

  const activateTab = (index) => {
    setActiveTab(index);
    onChange && onChange(index);
  };

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title }, index) => (
          <span
            key={title}
            className={cn(styles.tab, { [styles.active]: index === activeTab })}
            onClick={() => activateTab(index)}
          >
            {title}
          </span>
        ))}
      </div>
      {content}
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
