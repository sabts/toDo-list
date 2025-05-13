import styles from "./buttons.module.css"

const Button = ({children, action,  isActive}) => {
    return (
        <button
          className={`${styles.filter} ${isActive ? styles["filter-active"] : ""}`}
          onClick={action}
        >
          {children}
        </button>
      );
    };

export default Button