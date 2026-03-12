import styles from "./OfferBanner.module.css";
import arrowRight from "../../assets/icons/arrow-right-black.svg";

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
        <span>Hurry, Offer Ends In 12hrs 30mins 56Seconds</span>
      </div>
      <div className={styles.bannerBtn}>
        <button>
          Shop the Sale
          <img src={arrowRight} alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default OfferBanner;
