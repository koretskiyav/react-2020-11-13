import React from 'react';

export default function Rate(props) {
  const style = {
    color: 'red',
  };
  return <span style={style}>{props.rating}</span>;
}
