import styles from "./Navbar.module.css";
import Logo from "../../assets/image/Group 37.png";
import Bag from "../../assets/icons/bag-2.svg";
import heart from "../../assets/icons/heart.svg";
import profile from "../../assets/icons/profile.svg";
import Search from "../../assets/icons/search-normal.svg";
import Categories from "../../assets/image/category.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* For Top */}
      <div className={styles.topRow}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#spa">Spa</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.icons}>
          <button>
            <img src={Bag} alt="bag" />
          </button>
          <button>
            <img src={heart} alt="heart" />
          </button>
          <button>
            <img src={profile} alt="profile" />
          </button>
        </div>
        <div className={styles.mobileMenu}>
          <button>
            <img src={Categories} alt="categories" />
          </button>
        </div>
      </div>
      {/* For Bottom */}
      <div className={styles.bottomRow}>
        <div className={styles.categories}>
          <button>Women</button>
          <button>Men</button>
          <button>Kiddies</button>
          <button>New</button>
          <button>Popular</button>
        </div>
        <div className={styles.icons}>
          <button>
            <img src={Search} alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
