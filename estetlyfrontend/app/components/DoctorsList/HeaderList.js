import React from 'react';
import styles from '../../styles/HeaderList.module.css';

function HeaderList() {
  return (
    <header className={styles.topText}>
      <p className={styles.chapter}>CHAPTER 3</p>
      <h1 className={styles.title}>EXPERTS LIST</h1>
    </header>
  );
}

export default HeaderList;