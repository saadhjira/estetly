import React from "react";
import styles from '../../styles/doctordetail.css';
import Image from "next/image";


function Specialization() {
  return (
    <div className="doctordetailMainPage">
        <div className={"specialization"}>
            <div className="specializationTitle"><h3>Medical Aesthetics & Dermatology</h3></div>
            <div className={"languages"}>
                <h4 className={"languagesTitle"}>Spoken Languages</h4>
                <div className={"languageIcons"}>
                <Image src="/englishIcon.png" width={28} height={28}  alt="Language 1" className={"languageIcon"} />
                <Image src="/frenchIcon.png" width={28} height={28}  alt="Language 2" className={"languageIcon"} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Specialization;