import Hero from "../sections/Hero/Hero";
import Navbar from "../sections/Navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
