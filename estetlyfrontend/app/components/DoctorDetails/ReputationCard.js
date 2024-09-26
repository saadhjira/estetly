import React from 'react';
import styles from '../../styles/ReputationCard.module.css'
import Image from 'next/image';

function ReputationCard() {
  return (
    <article className={styles.reputationCard}>
      <div className={styles.overallRating}>
      <Image src="/pastilleDetail.svg" width={130} height={131}  alt="User avatar" className={styles.avatar} />
        <span className={styles.ratingText}>Overall Rating</span>
      </div>
      <div className={styles.reputationDetails}>
        <h3 className={styles.reputationTitle}>Reputation</h3>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Response Time</span>
            <span className={styles.statValue}>1h 12m</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Repurchase</span>
            <span className={styles.statValue}>76%</span>
          </div>
        </div>
        <button className={styles.reviewRequestButton}>
          <Image src="/whiteSquare.svg" width={20} height={21}  alt="" className={styles.buttonIcon} />
          Send Review Requests
        </button>
      </div>
      <button className={styles.manageButton}>Manage</button>
    </article>
  );
}

export default ReputationCard;