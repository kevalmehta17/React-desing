import styles from "./BestSeller.module.css";
import HeartIcon from "../../assets/icons/heart.svg";
import BagIcon from "../../assets/icons/bag-3.svg";
import xsBox from "../../assets/image/xsBox.png";
import ProductRefined from "../../assets/image/refined.png";
import ProductTop from "../../assets/image/Top.png";

const imageClassMap = {
  xsBoxImage: styles.xsBoxImage,
  refinedImage: styles.refinedImage,
  topImage: styles.topImage,
} as const;

type ImageClassName = keyof typeof imageClassMap;

const allProducts: {
  id: number;
  badge: string;
  name: string;
  oldPrice: string;
  price: string;
  image: string;
  imageClassName: ImageClassName;
}[] = [
  {
    id: 1,
    badge: "Best Seller",
    name: "X5 Extreme Body Lotion",
    oldPrice: "N35,000",
    price: "N30,000",
    image: xsBox,
    imageClassName: "xsBoxImage",
  },
  {
    id: 2,
    badge: "Refined",
    name: "AHA Face Toner",
    oldPrice: "N75,000",
    price: "N60,000",
    image: ProductRefined,
    imageClassName: "refinedImage",
  },
  {
    id: 3,
    badge: "Top",
    name: "Anti Stretchmark Oil",
    oldPrice: "N75,000",
    price: "N70,000",
    image: ProductTop,
    imageClassName: "topImage",
  },
];

const BestSeller = () => {
  return (
    <section id="shop" className={styles.section}>
      <div className={styles.heading}>
        <h2>Discover Our Best-Sellers</h2>
        <a href="#">View all</a>
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
                <button className={styles.favoriteButton} aria-label={`Add ${product.name} to favorites`}>
                  <img src={HeartIcon} alt="favorite" />
                </button>
              </div>
              <img
                className={imageClassMap[product.imageClassName]}
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.oldPrice}>{product.oldPrice}</span>
                  <span className={styles.currentPrice}>{product.price}</span>
                </div>
              </div>
              <button className={styles.cartButton}>
                <span>Add to Cart</span>
                <img src={BagIcon} alt="cart" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
