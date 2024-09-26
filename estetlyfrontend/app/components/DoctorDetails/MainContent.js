// import React from "react";
// import '../../styles/doctordetail.css';

// import SubscriptionPlan from './SubscriptionPlan';
// import Specialization from './Specialization';
// import ContactInfo from './ContactInfo';
// import InfoCard from './InfoCard';
// import Achievements from './Achievements';
// import Reputation from './Reputation';
// import DoctorPageDetail from "./DoctorPageDetail";

// function MainContent() {
//   return (
//     <section className={"mainContent"}>
//       <div className={"topSection"}>
//         <DoctorPageDetail />
//         <SubscriptionPlan />
//         <Specialization />
//         <ContactInfo />
//       </div>
//       <div className={"infoCards"}>
//         <InfoCard title="Description" content="Lorem ipsum dolor sit amet consectetur. Purus mattis egestas vulputate semper pellentesque sed vel donec mattis. Phasellus sed cursus ..." />
//         <InfoCard title="Core Values" content="Lorem ipsum dolor sit amet consectetur. Purus mattis egestas vulputate semper pellentesque sed vel donec mattis. Phasellus sed cursus ..." />
//       </div>
//       <Achievements />
//       <Reputation />
//     </section>
//   );
// }

// export default MainContent;

import React from 'react';
import InfoCard from './/InfoCard';
import AchievementsCard from './/AchievementsCard';
import ReputationCard from './/ReputationCard';
import styles from '../../styles/Maincontent.module.css';


function MainContent() {
  const infoCards = [
    { title: 'Description', content: 'Lorem ipsum dolor sit amet consectetur. Purus mattis egestas vulputate semper pellentesque sed vel donec mattis. Phasellus sed cursus ...' },
    { title: 'Core Values', content: 'Lorem ipsum dolor sit amet consectetur. Purus mattis egestas vulputate semper pellentesque sed vel donec mattis. Phasellus sed cursus ...' }
  ];

  return (
    <section className={styles.mainContent}>
      <div className={styles.infoCardContainer}>
        {infoCards.map((card, index) => (
          <InfoCard key={index} title={card.title} content={card.content} />
        ))}
      </div>
      <AchievementsCard />
      <ReputationCard />
    </section>
  );
}

export default MainContent;