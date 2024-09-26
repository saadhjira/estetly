import React from "react";
import styles from '../../styles/doctordetail.css';

function UserProfile(data) {
  
  return (
    <div className="doctordetailMainPage">
      <section className={"userProfile"}>
        <img src={data.picture} alt="Dr Alian Valdes profile" className={"profileImage"} />
        <div className={"userInfo"}>
          <h2 className={"userName"}>Dr {data.firstName} {data.lastName}</h2>
          <div className={"userHandle"}>
            <span className={"handleName"}>{data.officeName}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;