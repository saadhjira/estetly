import React from 'react';
import "../../styles/doctorlist.css";
import Image from 'next/image';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={"starRating"}>
      {[...Array(fullStars)].map((_, index) => (
        <Image src="/starIcon.svg" width={9} height={8} 
          key={index}
          loading="lazy"
          className={"starIcon"}
          alt=""
        />
      ))}
      {hasHalfStar && (
        <Image src="/starIcon.svg" width={9} height={8} 
          loading="lazy"
          className={"halfStarIcon"}
          alt=""
        />
      )}
    </div>
  );
};

export default StarRating;