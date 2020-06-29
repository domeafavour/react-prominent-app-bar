import React from 'react';
import styles from './AppLayout.module.css';

const AppLayout = ({ children, onLayoutScroll }) => {

  const onScroll = e => {
    onLayoutScroll(e.target.scrollTop);
  };

  return (
    <div
      className={styles.layout}
      onScroll={onScroll}
    >
      {children}
    </div>
  );
};

export default AppLayout;