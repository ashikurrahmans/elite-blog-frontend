import React from "react";
import HomeTitles from "./HomeTitles";
import ReviewCard from "./ReviewCard";
const reviews = [
  {
    id: 1,
    reviewDescription:
      "Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.",
    author: "Ashikur Rahman",
    authorImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    datesOfReview: "20 days",
    review: 4.5,
  },
  {
    id: 2,
    reviewDescription:
      "Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.n",
    author: "Ashikur Rahman",
    authorImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    datesOfReview: "20 days",
    review: 4.9,
  },
  {
    id: 3,
    reviewDescription:
      "this Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.",
    author: "Ashikur Rahman",
    authorImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    datesOfReview: "20 days",
    review: 4.2,
  },
  {
    id: 4,
    reviewDescription:
      "Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.",
    author: "Ashikur Rahman",
    authorImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    datesOfReview: "20 days",
    review: 4.5,
  },
  {
    id: 5,
    reviewDescription:
      "Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem. description",
    author: "Ashikur Rahman",
    authorImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    datesOfReview: "20 days",
    review: 4.9,
  },
  {
    id: 6,
    reviewDescription:
      "this is a Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.",
    author: "Ashikur Rahman",
    authorImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    datesOfReview: "20 days",
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
