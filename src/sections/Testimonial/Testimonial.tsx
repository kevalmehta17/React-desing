import styles from "./Testimonial.module.css";
import el1 from "../../assets/image/el3.png";
import el2 from "../../assets/image/Ellipse 252.png";
import el3 from "../../assets/image/el2.png";

interface ReviewCardProps {
  imageSrc: string;
  reviewHeading: string;
  review: string;
  name: string;
}

const ReviewCard = ({
  imageSrc,
  reviewHeading,
  review,
  name,
}: ReviewCardProps) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={`${name} Profile Picture`} />
      </div>
      <div className={styles.reviewContent}>
        <h3>{reviewHeading}</h3>
        <p>{review}</p>
        <strong>– {name}</strong>
      </div>
    </div>
  );
};

const allReviews: {
  id: number;
  imageSrc: string;
  reviewHeading: string;
  review: string;
  name: string;
}[] = [
  {
    id: 1,
    imageSrc: el1,
    reviewHeading: "2 weeks of using Glow Serum",
    review:
      "After 2 weeks of using Xtragleam, my skin has never felt smoother. Thank you!",
    name: "Lisa, Verified Buyer",
  },
  {
    id: 2,
    imageSrc: el2,
    reviewHeading: "Game Changer",
    review:
      "The Glow Serum is a game-changer. My dark spots faded within weeks, and my skin feels so hydrated!",
    name: "Emma L., Verified Buyer",
  },
  {
    id: 3,
    imageSrc: el3,
    reviewHeading: "More Confident",
    review:
      "I’ve struggled with acne for years, but Xtragleam changed everything! My skin is glowing, and I’ve never felt more confident.",
    name: "Sarah A., Verified Buyer",
  },
];

const Testimonial = () => {
  return (
    <div id="spa" className={styles.container}>
      <h1>Testimonial</h1>
      <div className={styles.testimonialCard}>
        {allReviews.map((review) => (
          <ReviewCard
            imageSrc={review.imageSrc}
            reviewHeading={review.reviewHeading}
            review={review.review}
            name={review.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
