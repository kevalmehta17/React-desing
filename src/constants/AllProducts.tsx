import xsBox from  "../assets/image/firstBottle.png"
import ProductRefined from "../assets/image/secondBottle.png";
import ProductTop from "../assets/image/thirdBottle.png";
import styles from "../pages/HomePage/components/BestSeller/BestSeller.module.css";

// eslint-disable-next-line react-refresh/only-export-components
export const imageClassMap = {
  xsBoxImage: styles.xsBoxImage,
  refinedImage: styles.refinedImage,
  topImage: styles.topImage,
} as const;

type ImageClassName = keyof typeof imageClassMap;

const AllProducts: {
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

export default AllProducts;