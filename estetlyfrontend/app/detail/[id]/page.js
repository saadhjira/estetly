import React from 'react';
import DoctorDetails from "../../components/DoctorDetails/MainContent";
import HeaderDetail from "../../components/DoctorDetails/HeaderDetail";
import MainContent from "../../components/DoctorDetails/MainContent";
import InfoCard from "../../components/DoctorDetails/InfoCard";
import Sidebar from "../../components/DoctorDetails/Sidebar";
import UserProfile from "../../components/DoctorDetails/UserProfile";
import Specialization from "../../components/DoctorDetails/Specialization";
import OfficeInfo from "../../components/DoctorDetails/OfficeInfo";
import DateDisplay from "../../components/DoctorDetails/DateDisplay";
import SubscriptionPlan from "../../components/DoctorDetails/SubscriptionPlan";
import ContactInfo from "../../components/DoctorDetails/ContactInfo";

async function doctor({ params} ) {
  
  const getDoctor = async() => {
    
    const res = await fetch("http://localhost:8090/doctors/"+params.id);
    return res.json();
  }

  const doctor = await getDoctor();
  console.log(doctor.id+ "--" +doctor.picture)

  return (
    <>
        <HeaderDetail />
        <hr className="mainPageDivider"/>
        
        <DateDisplay date="2024-09-22"/>

        <div className="doctorInfoMainPage">
        <SubscriptionPlan />
        <div>
            <UserProfile picture={doctor.picture} firstName={doctor.firstName} lastName={doctor.lastName} officeName={doctor.officeName}/>
            <Specialization data={doctor}/>
        </div>
        <ContactInfo />
        </div>      
        
        <div className="mainPage">
        <Sidebar />
        <MainContent />
        <OfficeInfo />
        </div> 
    </>
  );
}

export default doctor;