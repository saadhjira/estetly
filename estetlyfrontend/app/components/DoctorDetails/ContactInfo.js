import React from "react";
import '../../styles/doctordetail.css';
import Image from "next/image";


function ContactInfo() {
  return (
    <div className={"contactInfo"}>
      <h3 className={"contactTitle"}>Contacts</h3>
      <ul className={"contactList"}>
        <li className={"contactItem"}>
          <Image src="/whatsappIcon.svg" width={20} height={20}  alt="" className={"contactIcon"} />
          <span>+33 6 87 95 86</span>
        </li>
        <li className={"contactItem"}>
          <Image src="/phoneIcon.svg" width={20} height={20}  alt="" className={"contactIcon"} />
          <span>+33 1 87 95 86</span>
        </li>
        <li className={"contactItem"}>
          <Image src="/messageIcon.svg" width={20} height={20}  alt="" className={"contactIcon"} />
          <button className={"directMessaging"}>Direct messaging</button>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;