import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import OfficeInfo from './OfficeInfo';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <Sidebar />
      <MainContent />
      <OfficeInfo />
    </main>
  );
}

export default Dashboard;