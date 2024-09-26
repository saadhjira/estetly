import React from 'react';
import styles from '../../styles/SidebarItem.module.css';
import Image from 'next/image';

function SidebarItem({ icon, text }) {
  return (
    <div className={styles.sidebarItem}>
      <div className={styles.iconWrapper}>
        <Image src={icon} width={22} height={22}  alt="" className={styles.icon} />
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
}

export default SidebarItem;