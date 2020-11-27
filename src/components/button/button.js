import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';

import PlusIcon from './icons/plus.svg';
import MinusIcon from './icons/minus.svg';
import DeleteIcon from './icons/delete.svg';

const icons = {
  plus: PlusIcon,
  minus: MinusIcon,
  delete: DeleteIcon,
};

const Button = ({
  icon,
  primary = false,
  secondary = false,
  small = false,
  block = false,
  children,
  ...props
}) => {
  const iconSrc = icons[icon];

  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.small]: small,
        [styles.block]: block,
      })}
      {...props}
    >
      {iconSrc && <img src={iconSrc} alt={icon} />}
      {children}
    </button>
  );
};

export default Button;
