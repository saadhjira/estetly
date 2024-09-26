import React from "react";
import '../../styles/doctordetail.css';

import Header from './HeaderDetail';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import OfficeInfo from './OfficeInfo';

function DoctorPageDetail() {
  return (
    <div className={""}>
      <Header />
      <h1 className={"pageTitle"}>MY SPACE</h1>
      <div className={"separator"} />
      <time className={"currentDate"}>Friday 22 September, 2024</time>
      <UserProfile />
      <main className={"mainContainer"}>
        <MainContent />
        <OfficeInfo />
      </main>
    </div>
  );
}

export default DoctorPageDetail;