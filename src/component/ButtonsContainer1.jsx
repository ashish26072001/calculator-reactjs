import styles from "./ButtonsContainer.module.css";
function ButtonsContainer({onButtonClick}) {
    const buttonNames=["1","2",,"3","4",,"5","6",,"7","8","9","0","+","-","*","/",".","c","="];
return <div className={styles.buttonsContainer}>
{buttonNames.map(buttonName=> (
<button className={styles.button} onClick={() => onButtonClick(buttonName)}>{buttonName}</button>))}
    
</div>
};

export default ButtonsContainer;