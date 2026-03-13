
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerSection}>
      {/* Email Subscription */}
      <div className={styles.subscriptionContainer}>
        <h4>Be the first to get notification about our upcoming event</h4>
        <div className={styles.inputButtonContainer}>
        <input type="email" placeholder="Email" />
        <button>Submit</button>
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
