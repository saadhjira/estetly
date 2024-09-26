import React from 'react';
import styles from '../../styles/AchievementsCard.module.css';
import Image from 'next/image';

function AchievementsCard() {
  const achievements = [
    { number: '02', text: 'Association & Syndicates' },
    { number: '04', text: 'Diplomas / Training / Certificates / Prizes' }
  ];

  return (
    <article className={styles.achievementsCard}>
      <h2 className={styles.cardTitle}>Achievements</h2>
      <div className={styles.achievementsList}>
        {achievements.map((achievement, index) => (
          <div key={index} className={styles.achievementItem}>
            <span className={styles.achievementNumber}>{achievement.number}</span>
            <span className={styles.achievementText}>{achievement.text}</span>
            <Image src="/plusIcon.svg" width={9} height={9} alt="" className={styles.chevronIcon} />
          </div>
        ))}
      </div>
    </article>
  );
}

export default AchievementsCard;