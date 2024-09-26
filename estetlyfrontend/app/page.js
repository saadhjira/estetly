
import HeaderList from "./components/DoctorsList/HeaderList";
import DoctorItem from "./components/DoctorsList/DoctorItem";
import DoctorDetails from "./components/DoctorDetails/MainContent";
import HeaderDetail from "./components/DoctorDetails/HeaderDetail";
import MainContent from "./components/DoctorDetails/MainContent";
import InfoCard from "./components/DoctorDetails/InfoCard";
import Sidebar from "./components/DoctorDetails/Sidebar";
import UserProfile from "./components/DoctorDetails/UserProfile";
import Specialization from "./components/DoctorDetails/Specialization";
import OfficeInfo from "./components/DoctorDetails/OfficeInfo";
import DateDisplay from "./components/DoctorDetails/DateDisplay";
import SubscriptionPlan from "./components/DoctorDetails/SubscriptionPlan";
import ContactInfo from "./components/DoctorDetails/ContactInfo";
import Statistics from "./components/DoctorsList/Statistics";

export default async function doctors() {
  
  const getDoctors = async() => {
    const res = await fetch("http://localhost:8090/doctors")
    return res.json()
  }

  const data = await getDoctors()

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Forum&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Forum&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      
      {/* <HeaderDetail />
      <hr className="mainPageDivider"/>
      
      <DateDisplay date="2024-09-22"/>

      <div className="doctorInfoMainPage">
        <SubscriptionPlan />
        <div>
          <UserProfile />
          <Specialization />
        </div>
        <ContactInfo />
      </div>      
      
      <div className="mainPage">
        <Sidebar />
        <MainContent />
        <OfficeInfo />
      </div>
 */}

      
      {/* <DoctorDetails /> */}
      <HeaderList />
      <Statistics />
      
      {
        data.map( (item, index ) => (
          <DoctorItem data={item} />
        ))
      }
      
    </>
  );
}
