import React from 'react';
import styles from '../../styles/OfficeInfo.module.css';
import Image from 'next/image';

function OfficeInfo() {
  return (
    <aside className={styles.officeInfo}>
      <header className={styles.officeHeader}>
        <Image src="/hospitalIcon.svg" width={22} height={22}  alt="" className={styles.officeIcon} />
        <h2 className={styles.officeTitle}>MY OFFICE</h2>
      </header>
      <div className={styles.officeContent}>
        <div className={styles.officeStats}>
          <span className={styles.statNumber}>02</span>
          <span className={styles.statLabel}>Offices</span>
          <Image src="/plusIcon.svg" width={9} height={10}  alt="" className={styles.chevronIcon} />
        </div>
        <button className={styles.manageButton}>Manage</button>
      </div>
      <section className={styles.currentOffice}>
        <h3 className={styles.currentOfficeTitle}>Current Office - <span className={styles.officeName}>BASTILLE</span></h3>
        <div className={styles.officeDetails}>
          <div className={styles.officeImages}>
            <Image src="/pictoAdress1.png" width={84} height={63}  alt="Office exterior" className={styles.officeExterior} />
            <Image src="/desktopPicture.png" width={50} height={50}  alt="Office logo" className={styles.officeLogo} />
          </div>
          <Image src="/hospitalPicture.png" width={180} height={139}  alt="Office map" className={styles.officeMap} />
        </div>
        <address className={styles.officeAddress}>
          103 Rue de la Santé, 75001 <br /> Paris, France
        </address>
        <div className={styles.paymentMethods}>
          <span className={styles.paymentLabel}>Available Payments</span>
          <div className={styles.paymentIcons}>
            <Image src="/cardIcon.svg" width={20} height={20} alt="Payment method 1" className={styles.paymentIcon} />
            <Image src="/cashIcon.svg" width={20} height={20}   alt="Payment method 2" className={styles.paymentIcon} />
            <Image src="/chequeIcon.svg" width={20} height={20}  alt="Payment method 3" className={styles.paymentIcon} />
          </div>
        </div>
      </section>
    </aside>
  );
}

export default OfficeInfo;