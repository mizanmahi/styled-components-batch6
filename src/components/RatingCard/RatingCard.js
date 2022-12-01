import React from 'react';
import {
   H1,
   P,
   RatingCardWrapper,
   RatingIconBox,
   StarButton,
   SubmitButton,
} from './ratingCard.styles';
import Star from '../../assets/icon-star.svg';
import { useState } from 'react';

const RatingCard = () => {
   const [selectedRating, setSelectedRating] = useState(0);

   console.log(selectedRating);

   return (
      <RatingCardWrapper>
         <RatingIconBox>
            <img src={Star} alt='star icon' />
         </RatingIconBox>
         <H1>How did we do?</H1>
         <P>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering
         </P>

         {[1, 2, 3, 4, 5].map((item, i) => (
            <StarButton
               as='button'
               key={i}
               onClick={() => setSelectedRating(item)}
               selected={selectedRating === i + 1}
            >
               {item}
            </StarButton>
         ))}

         <SubmitButton>Submit</SubmitButton>
      </RatingCardWrapper>
   );
};

export default RatingCard;
