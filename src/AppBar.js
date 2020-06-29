import React from 'react';
import styles from './AppBar.module.css';

const appBarHeight = 64;

const Appbar = ({ title, height = 500, background, layoutScrollTop = 0 }) => {

  return (
    <div
      className={styles.appBar}
      style={{
        height,
        backgroundImage: `url("${background}")`,
      }}
    >
      <div
        className={styles.container}
        style={{
          backgroundImage: height - layoutScrollTop <= appBarHeight ? `url("${background}")` : null,
        }}
      >
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Appbar;