const FeaturesSeparator = ({ styles }) => {
  return (
    <div className={styles['broker-features__separator']}>
      <div className={styles['broker-features__separator__inner']}>
        <div className={styles['broker-features__separator--horizontal']}></div>
        <div className={styles['broker-features__separator--additional--horizontal']}></div>
        <div className={styles['broker-features__separator--vertical']}></div>
        <div className={styles['broker-features__separator--additional--vertical']}></div>
        <div className={styles['broker-features__separator--point']}></div>
      </div>
    </div>
  );
};

export default FeaturesSeparator;
