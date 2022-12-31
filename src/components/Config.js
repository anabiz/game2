import TextField from "./reusables/TestField";
import Button from "./reusables/Button";
import React, {useContext } from "react";
import AppContext from "../AppContext";



function Config() {

    const {setLower, setUpper } = useContext(AppContext);

    const updateLower = (e)=>{
        setLower(e.target.value);
    }
    const updateUpper = (e)=>{
      setUpper(e.target.value);
  }
  function reset() {
    setLower('');
    setUpper('');
  }
  // const handleReset =(e)=>{
  //   setUpper(e.target.value);
  // }
  return (
    <div className="config">
       <h3>Game Config</h3>
       <div>
        <div>
         <TextField name={"lowerBound"} labelValue={"Lower bound:"} handleChange={updateLower}/>
        </div>
        <div>
         <TextField name={"upperBound:"} labelValue={"Upper bound:"} handleChange={updateUpper} />
        </div>
        <Button placeholder={"Reset"} onClick={reset}/>
       </div>
    </div>

  );
}

export default Config;