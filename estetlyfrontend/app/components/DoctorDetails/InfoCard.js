import React from 'react';
import styles from '../../styles/InfoCard.module.css'
import Image from 'next/image';

function InfoCard({ title, content }) {
  return (
    <article className={styles.infoCard}>
      <header className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <Image src="/bottonArrow.svg" width={11} height={6}  alt="" className={styles.expandIcon} />
      </header>
      <p className={styles.cardContent}>{content}</p>
    </article>
  );
}

export default InfoCard;