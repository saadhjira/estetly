import React from 'react';
import SidebarItem from './/SidebarItem';
import styles from '../../styles/Sidebar.module.css';
import Image from 'next/image';

function Sidebar() {
  const menuItems = [
    { icon: '/dashboardIcon.svg', text: 'MY DASHBOARD' , className: 'sidebarFirst' },
    { icon: '/bookmarksIcon.svg', text: 'MY BOOKMARKS' , className: 'sidebarFirst'},
    { icon: '/discutionsIcon.svg', text: 'My Discussions', className: 'sidebarSecond'},
    { icon: '/reviewsIcon.svg', text: 'My Reviews' , className: 'sidebarSecond'},
    { icon: '/rutinesIcon.svg', text: 'My Routines', className: 'sidebarSecond' }
  ];

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        {menuItems.map((item, index) => (
          <SidebarItem key={index} icon={item.icon} text={item.text} className={item.className}/>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;