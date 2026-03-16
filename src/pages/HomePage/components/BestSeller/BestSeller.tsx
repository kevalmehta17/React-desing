import styles from "./BestSeller.module.css";
import HeartIcon from "../../../../assets/icons/heart.svg";
import BagIcon from "../../../../assets/icons/bag3.svg";
import Button from "../../../../components/Button";
import Link from "../../../../components/Link";
import allProducts from "../../../../constants/AllProducts";
import { imageClassMap } from "../../../../constants/AllProducts";

const BestSeller = () => {
  return (
    <section id="shop" className={styles.section}>
      <div className={styles.heading}>
        <h2>Discover Our Best-Sellers</h2>
        <Link path="#">View all</Link>
      </div>
      <div className={styles.productGrid}>
        {allProducts.map((product) => (
          <article className={styles.card} key={product.id}>
            <div className={styles.cardMedia}>
              <div className={styles.cardTop}>
                <div>
                  <p className={styles.cardBadge}>{product.badge}</p>
                  <span className={styles.rating}>★★★★★</span>
                </div>
                <Button className={styles.favoriteButton} aria-label={`Add ${product.name} to favorites`}>
                  <img src={HeartIcon} alt="favorite" />
                </Button>
              </div>
              <div className={styles.imageContainer}>
              <img
                className={imageClassMap[product.imageClassName]}
                src={product.image}
                alt={product.name}
              /></div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.oldPrice}>{product.oldPrice}</span>
                  <span className={styles.currentPrice}>{product.price}</span>
                </div>
              </div>
              <Button className={styles.cartButton}>
                <span>Add to Cart</span>
                <img src={BagIcon} alt="cart" />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
