import styles from './header.module.css'
const Header = () => {
 
  return (
    <div className={styles.header}>
      <img className={styles.headerImg} src="./marica.jpg" alt="" />

      <div className={styles.headerTextWrapper}>
        <p className={styles.headerText1}>Marica Nicholas, LPC-Associate</p>
        <p className={styles.headerText1}>Counseling Services</p>
        <p className={styles.headerText2}>Supervised By Ana Valenzuela, LPC-S</p>
        
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
