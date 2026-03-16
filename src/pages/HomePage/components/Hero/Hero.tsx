import styles from "./Hero.module.css";
import ShampooBottle from "../../../../assets/image/Group 6270.png";
import send from "../../../../assets/icons/send.svg";
import arrowRight from "../../../../assets/icons/arrow-right.svg";
import AcneIssue from "../../../../assets/image/Frame 6269.png";
import arrowRightBlack from "../../../../assets/icons/arrow-right-black.svg";
import Button from "../../../../components/Button";

const Hero = () => {
  return (
    <div id="home" className={styles.heroContainer}>
      {/* TOP HERO */}
      <div className={styles.heroUpper}>
        {/* LEFT */}
        <div className={styles.heroLeft}>
          <div className={styles.heroContent}>
            <div className={styles.heading}>
              <span>
                Glow Beyond
                <img src={send} alt="sendLogo" />
              </span>
              <h1>Expectations</h1>
            </div>
            <div>
              <p>
                Clean, effective, and cruelty-free skincare made to deliver
                visible results.
              </p>
            </div>
          </div>
          {/* For shop button */}
          <div className={styles.shopBtn}>
            <Button>Shop Now</Button>
            <img src={arrowRight} alt="arrowRight" />
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.heroRight}>
          <img src={ShampooBottle} alt="product" />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className={styles.heroBottom}>
        <h2 className={styles.bottomHeading}>Why Choose Xtragleam?</h2>
        <div className={styles.bottomContent}>
          <div className={styles.bottomContentLeft}>
            <img src={AcneIssue} alt={"acne issue image"} />
          </div>
          <div className={styles.bottomInformation}>
            <h3>Struggling with acne issues?</h3>
            <p>
              At Xtragleam Skincare, we understand how frustrating acne can be,
              and we’re here to help you regain confidence in your skin. Our
              carefully designed recovery process targets acne at its root while
              soothing and nourishing your skin for long-term health.
            </p>
            <div className={styles.exploreBtn}>
              <Button>Explore Our Range</Button>
              <img src={arrowRightBlack} alt="right arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
