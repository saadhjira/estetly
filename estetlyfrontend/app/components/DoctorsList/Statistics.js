import React from 'react';
import styles from '../../styles/Statistics.module.css';
import Image from 'next/image';

const StatisticItem = ({ percentage, label, className }) => (
  <div className={`${styles.statisticItem} ${className || ''}`}>
    <div className={styles.statisticPercentage}>{percentage}%</div>
    <div className={styles.statisticLabel}>{label}</div>
  </div>
);

const Statistics = () => {
  const statistics = [
    { percentage: 30, label: 'Signed up' },
    { percentage: 70, label: 'Verified', className: styles.verifiedStatistic }
  ];

  return (
    <section className={styles.statisticsContainer}>
      <h2 className={styles['visually-hidden']}>User Statistics</h2>
      <div className={styles.statisticsWrapper}>
      <Image src="/pastilList.svg" width={160} height={160} 
          loading="lazy" 
          className={styles.backgroundImage} 
          alt="" 
        />
        {statistics.map((stat, index) => (
          <StatisticItem 
            key={index}
            percentage={stat.percentage}
            label={stat.label}
            className={stat.className}
          />
        ))}
      </div>
    </section>
  );
};

export default Statistics;