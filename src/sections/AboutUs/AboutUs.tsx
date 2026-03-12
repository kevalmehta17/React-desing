import styles from "./AboutUs.module.css";
import Houses from "../../assets/image/Pic About 2.png";
import HallImage from "../../assets/image/R.png";

const AboutUs = () => {
  return (
    <section className={styles.aboutContainer}>
      {/* Left Side view */}
      <div className={styles.aboutLeft}>
        <span className={styles.badge}>ABOUT US</span>
        <h2>How much is your property worth now?</h2>
        <p>
          We have built our reputation as true local area experts. We have
          gained more knowledge about buyer interests, our neighborhood and the
          market than any other brand because we live locally and work for local
          people.
        </p>
        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.card}>
            <h3>178K+</h3>
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in
              libero.
            </p>
          </div>
          <div className={styles.card}>
            <h3>362</h3>
            <p>Lorem ipsum dolor amet, consectetur adipiscing elit.</p>
          </div>
        </div>
         <div className={styles.secondCard}>
          <div className={styles.secondCardContent}>

            <h3>Title</h3>
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in
              libero.
            </p>
          </div>
          <div className={styles.secondCardContentImage}>

             <img src={Houses} alt="houses Image" />
          </div>
          </div>
      </div>
      {/* Right Side view */}
      <div className={styles.aboutRight}>
        <img src={HallImage}  alt="hall image" />
      </div>
    </section>
  );
};

export default AboutUs;
