import styles from "./Testimonial.module.css";
import { allReviews } from "../../../../constants/AllReviews";

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
        <p>{review}

        <strong>– {name}</strong>
        </p>
      </div>
    </div>
  );
};

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
