import React from "react";
import HomeTitles from "./HomeTitles";
import ReviewCard from "./ReviewCard";
const reviews = [
  {
    id: 1,
    reviewDescription:
      "Best Restorations Hands Down. Zero adjustments 95% of the time. Color and shade is spot on. We do digital and conventional impressions and never have a issue. This is the dental lab that has blessed our office.",
    author: "NOR CAL",
    authorImage: "https://lh3.googleusercontent.com/a-/AD5-WCls9GfyNuq6SD8nSqPGOAypI0NgQYDchgDeXdj3Vg=w60-h60-p-rp-mo-br100",
    datesOfReview: "4 years ago",
    review: 5.0,
  },
  {
    id: 2,
    reviewDescription:
      "I have to deal with appointments on behalf of my mother, I have always found the staff, especially the reception staff to be very helpful and supportive of my mothers needs.The staff have always been extremely understanding of mums challenges in her dental care",
    author: "Sonia Velasquez",
    authorImage: "https://lh3.googleusercontent.com/a/AEdFTp6Lhv-ILU-29t5MJmxNeg2E7jpDUyEU8DJeHYPf=w60-h60-p-rp-mo-br100",
    datesOfReview: "4 years ago",
    review: 5.0,
  },
  {
    id: 3,
    reviewDescription:
      "We are happy we found Elite Dental Studio . Our office runs more efficiently and patients are very happy with the final restorations . Thank you Elite Team",
    author: "Mim Apps Ltd.",
    authorImage: "https://lh3.googleusercontent.com/a-/AD5-WClm4XKOEWt9OfPZQWaFnWVyGd3UVcB0hnMg4ZF_=w60-h60-p-rp-mo-br100",
    datesOfReview: "4 years ago",
    review: 5.0,
  },
  {
    id: 4,
    reviewDescription:
      "This Dental Lab Tech Team is Top Notch. Happy I found them give them one try you won’t regret it.",
    author: "James",
    authorImage: "https://lh3.googleusercontent.com/a-/AD5-WCmE0HOagYP6PPsC-3XuLWMBo9gt2-v7G1z4sxkm=w60-h60-p-rp-mo-ba2-br100",
    datesOfReview: "4 years ago",
    review: 5.0,
  },
  {
    id: 5,
    reviewDescription:"Awesome lab and great products.  Edgar is very easy to deal with as well, highly recommended",
    author: "Kai Lang",
    authorImage: "https://lh3.googleusercontent.com/a-/AD5-WCmAzenpO4yKvobXBGpsNKe_zQeYZTa0va4HAfw4fhg=w60-h60-p-rp-mo-br100",
    datesOfReview: "5 years ago",
    review: 5.0,
  },
  {
    id: 6,
    reviewDescription:
      "Best ever! Great techs and very friendly!,Very much helpful and dedicated.  Highly recommended.You can consult with Dr. Edger there.",
    author: "Gisele Bahena",
    authorImage: "https://lh3.googleusercontent.com/a-/AD5-WCmVaChqI2vLh5I5cNSFftA42XJ-k13BeBANPdZRMw=w60-h60-p-rp-mo-br100",
    datesOfReview: "4 years ago",
    review: 5.0,
  },

];

const CustomerReviews = () => {
  return (
    <div className="w-9/12 mx-auto lg:py-10 md:py-8 sm:py-6">
      <HomeTitles
        title="What People Say About us."
        description="Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem."
      ></HomeTitles>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
