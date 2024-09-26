import React from "react";
import '../../styles/doctordetail.css';
import Image from 'next/image';


function HeaderDetail() {
  return (
    <header className={"header"}> 
      <Image src="/estetlylogo.png" width={137} height={16} className={"logo"} />
      <Image src="/estetlylogoPhone.png" width={19} height={24} className={"logoPhone"} />
      <h2 className={"mySpace"}>MY SPACE</h2>
      <nav className={"navigation"}>
        <button className={"backButton"}>
          <Image src="/backArrow.svg" width={24} height={24}  alt="" className={"backIcon"} />
          <span>BACK</span>
        </button>
      </nav>
    </header>
  );
}

export default HeaderDetail;