import React from 'react';
import { FaRegStarHalf } from 'react-icons/fa';

export const RatingStar = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: fullStars }, (_, index) => (
    <span key={index}>⭐</span>
  ));

  if (hasHalfStar) {
    stars.push(<span key="half">⭐⭐⭐⭐⭐</span>);
  }

  return <div>{stars}</div>;
};

const MyComponent = () => {
  const ratingData = [
    { id: 1, rating: 4 },
    { id: 2, rating: 3 },
    { id: 3, rating: 5 },
  ];

  return (
    <div>
      {ratingData.map((item) => (
        <div key={item.id}>
          <p>{`Rating: ${item.rating}`}</p>
          <RatingStar rating={item.rating} />
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
