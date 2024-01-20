const Introduction = ({ styles }) => {
  return (
    <div className={styles['broker-features__introduction']}>
      <p className={styles['broker-features__slogan']}>
        Big<span className={styles['broker-features__slogan-accent']}>.</span> Fair<span className={styles['broker-features__slogan-accent']}>.</span> Human<span className={styles['broker-features__slogan-accent']}>.</span>
      </p>
      <p className={styles['broker-features__description']}>
        Learn why <b>over 5 million clients choose XM</b> as their trusted online broker.
      </p>
    </div>
  );
};

export default Introduction;
