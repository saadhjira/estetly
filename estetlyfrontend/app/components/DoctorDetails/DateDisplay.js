import React from 'react';
import styles from '../../styles/DateDisplay.module.css'

const DateDisplay = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className={styles.displayDateMainPage}>
        <time className={styles.dateDisplay} dateTime={date}>
        {formattedDate}
        </time>
    </div>
  );
};

export default DateDisplay;