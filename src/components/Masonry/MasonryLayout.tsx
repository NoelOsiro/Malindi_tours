'use client'
import React from 'react';
import Masonry from 'react-masonry-css';
import styles from './Masonry.module.css'; 

interface MasonryLayoutProps {
  children: React.ReactNode;
  breakpointCols: { [key: number]: number };
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({
  children,
  breakpointCols,
}) => {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className={styles.myMasonGrid}
      columnClassName={styles.myMasonGrid_column}
    >
      {children}
    </Masonry>
  );
};

export default MasonryLayout;
