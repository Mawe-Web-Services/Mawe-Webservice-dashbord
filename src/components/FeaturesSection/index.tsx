import styles from "./styles.module.css";

type FeaturesSection = {
  title: string;
  icon: string;
  text: string;
};

const FeaturesSection = ({ title, icon, text }: FeaturesSection) => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featureItem}>
        <div className={styles.featureIcon}>{icon}</div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
