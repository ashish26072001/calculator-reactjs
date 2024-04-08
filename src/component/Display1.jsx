import styles from "./Display.module.css";
function Display({displayvalue}) {
return <input className={styles.display} type="text" Value={displayvalue} readOnly/>;
};

export default Display;