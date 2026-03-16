
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div id="contact" className={styles.footerSection}>
      {/* Email Subscription */}
      <div className={styles.subscriptionContainer}>
        <h4>Be the first to get notification about our upcoming event</h4>
        <div className={styles.inputButtonContainer}>
        <Input type="email" placeholder="Email" />
        <Button>Submit</Button>
        </div>
      </div>
      <hr className={styles.divider} />
      {/* CopyRight Section */}
      <div className={styles.copyrightContainer}>
        <p>© 2024, Xtragleam Skincare. All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
