import styles from "./button.module.css";
const Button = (props) => {
  return (
    <div>
      <button className={styles.button}>
        <img src={props.icon} alt="" />
        {props.text}
      </button>
    </div>
  );
};

export default Button;
