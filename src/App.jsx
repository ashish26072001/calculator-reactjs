import Display from "./component/Display1"; 
import ButtonsContainer from "./component/ButtonsContainer1";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
    const [calval,setcalval]=useState("");
    const onButtonClick=(buttonName)=>{
        if(buttonName==="c"){
        setcalval("");}
        else if(buttonName === "="){
            const result=eval(calval);
            setcalval(result);

        } 
        else{
            const newDisplayvalue = calval + buttonName;
            setcalval(newDisplayvalue);
        }


    };
   return <div className={styles.outerbox}>
    <h1 className={styles.heading}>Calculator</h1>
   <div className={styles.calculator}>
    <Display displayvalue={calval}></Display>
    <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div> 
    </div>
};
export default App;
