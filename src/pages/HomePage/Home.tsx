import AboutUs from "./components/AboutUs/AboutUs";
import BestSeller from "./components/BestSeller/BestSeller";
import Footer from "../../layout/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "../../layout/Navbar/Navbar";
import OfferBanner from "./components/OfferBanner/OfferBanner";
import Testimonial from "./components/Testimonial/Testimonial";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Hero />
      <AboutUs />
      <BestSeller />
      <Testimonial />
      <OfferBanner />
      <Footer />
    </div>
  )
}

export default Home
