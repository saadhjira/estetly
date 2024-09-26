import React from 'react';
import "../../styles/doctorlist.css";
import StarRating from './StartRating.js';
import Image from 'next/image';


export default function DoctorItem (doctorItemData) {
    console.log(doctorItemData.data.id)
    const isVerified = doctorItemData.data.verified ? "verifiedTag" : "notVerifiedTag" ;
    const linkDoctor = "/detail/"+doctorItemData.data.id;
    return (
        <article className={"profileContainer"}>
            <section className={"doctorInfo"}>
                <div>
                    <div className={"usernameTag " + isVerified}>
                        <span className={"username"}>{doctorItemData.data.verified ? "VERIFIED" : "SIGNED UP"}</span>
                    </div>
                    <img
                    loading="lazy"
                    src={doctorItemData.data.picture}
                    className={"doctorImage"}
                    alt={doctorItemData.data.firstName+" "+doctorItemData.data.lastName}
                    />
                </div>
                <div className={"textInfo"}>
                    <div className={"nameContainer"}>
                        <h1 className={"doctorName"}>Dr {doctorItemData.data.firstName+" "+doctorItemData.data.lastName}</h1>
                        <div className={"usernameTag"}>
                            <span className={"username"}>{doctorItemData.data.officeName}</span>
                        </div>
                    </div>
                    <div className={"specialty"}>
                        {doctorItemData.data.speciality}
                    </div>
                    <div className={"ratingContainer"}>
                        <StarRating rating={4.1} />
                        <div className={"ratingText"}>
                        <span className={"ratingScore"}>4.1</span>
                        <span className={"reviewCount"}>(34 reviews)</span>
                        </div>
                    </div>
                    <address className={"address"}>
                        103 Rue de la Santé, 75001, Paris, France
                    </address>
                </div>
                <div className={"specialtyInfo"}>
                    <div className={"specialtyLabel"}>
                        <Image src="/checkIcon.svg" width={17} height={18} 
                            loading="lazy"
                            className={"specialtyIcon"}
                            alt=""
                        />
                        <span className={"specialtyText"}>My Specialty</span>
                    </div>
                    <p className={"price"}>Price: 2320 €</p>
                    <div className={"buttonContainer"}>
                        <a href={linkDoctor}>
                            <Image src="/ProfileDetails.svg" width={110} height={21} 
                                loading="lazy"
                                className={"actionButton"}
                                alt="Book Appointment"
                            />
                        </a>
                        <a href="#">
                        <Image src="/bookButton.svg" width={110} height={21} 
                            loading="lazy"
                            className={"actionButton"}
                            alt="Contact Doctor"
                        />
                        </a>
                    </div>
                </div>
            </section>
        </article>
  );
}