import AboutUs from "../sections/AboutUs/AboutUs";
import BestSeller from "../sections/BestSeller/BestSeller";
import Hero from "../sections/Hero/Hero";
import Navbar from "../sections/Navbar/Navbar";
import Testimonial from "../sections/Testimonial/Testimonial";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Hero />
      <AboutUs />
      <BestSeller />
      <Testimonial />
    </div>
  )
}

export default Home
