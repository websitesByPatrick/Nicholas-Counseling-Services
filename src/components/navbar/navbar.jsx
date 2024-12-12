import styles from "./navbar.module.css";
import Button from "../button/button"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Button text="Email Me" icon="email.png" />
        <Button text="Follow Me On Facebook" icon="facebook.png" />
        <Button text="Book Appointment" icon="calendar.png" />
      
    </div>
  );
};

export default Navbar;
