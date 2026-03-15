import styles from "./OfferBanner.module.css";
import arrowRight from "../../../assets/icons/arrow-right-black.svg";
import Button from "../../../components/Button";

const OfferBanner = () => {
  return (
    <div className={styles.offerBanner}>
      <div className={styles.bannerHeading}>
        <h1>Don't Miss Out: Limited-Time Offer!</h1>
        <h3>
          Enjoy 20% off your first purchase with code <span>GLOW20</span>
        </h3>
      </div>
      <div className={styles.bannerContent}>
        <span className={styles.offerText}>Hurry, Offer Ends In</span>
        <span className={styles.offerTimer}>12hrs 30mins 56Seconds</span>
      </div>
      <div className={styles.bannerBtn}>
        <Button>
          Shop the Sale
          <img src={arrowRight} alt="arrow right" />
        </Button>
      </div>
    </div>
  );
};

export default OfferBanner;
