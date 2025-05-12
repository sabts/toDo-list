import styles from "./buttons.module.css"

const Button = ({children, action}) => {
return<button 
className={styles["filter"]}
onClick={action}>{children}</button>
}

export default Button