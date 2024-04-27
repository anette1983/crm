import React from 'react';
import styles from './not-active-label.module.css';

export interface NotActiveLabelProps {
  children: React.ReactNode;
}

function NotActiveLabel({ children }: NotActiveLabelProps) {
  return <span className={styles.label}>{children}</span>;
}

export default NotActiveLabel;
