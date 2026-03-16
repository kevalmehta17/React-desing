import styles from "./Navbar.module.css";
import Logo from "../../assets/image/logo.png"
import Bag from "../../assets/icons/bag2.svg";
import heart from "../../assets/icons/heart.svg";
import profile from "../../assets/icons/profile.svg";
import Search from "../../assets/icons/searchIcon.svg";
import Categories from "../../assets/image/category.png";
import Link from "../../components/Link";
import Button from "../../components/Button";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* For Top */}
      <div className={styles.topRow}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.navLinks}>
          <Link path="#home">Home</Link>
          <Link path="#shop">Shop</Link>
          <Link path="#spa">Spa</Link>
          <Link path="#about">About</Link>
          <Link path="#contact">Contact</Link>
        </div>
        <div className={styles.icons}>
          <Button>
            <img src={Bag} alt="bag" />
          </Button>
          <Button>
            <img src={heart} alt="heart" />
          </Button>
          <Button>
            <img src={profile} alt="profile" />
          </Button>        
        </div>
        <div className={styles.mobileMenu}>
          <Button>
            <img src={Categories} alt="categories" />
          </Button>
        </div>
      </div>
      {/* For Bottom */}
      <div className={styles.bottomRow}>
        <div className={styles.categories}>
          <Button>Women</Button>
          <Button>Men</Button>
          <Button>Kiddies</Button>
          <Button>New</Button>
          <Button>Popular</Button>
        </div>
        <div className={styles.icons}>
          <Button>
            <img src={Search} alt="search" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
