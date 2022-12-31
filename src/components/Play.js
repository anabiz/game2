import TextField from "./reusables/TestField";
import Button from "./reusables/Button";
import React, {useContext } from "react";
import AppContext from "../AppContext";


function Play() {

  const {lower, upper} = useContext(AppContext);
  const {lastNumber} = useContext(AppContext);
  const {randomValue} = useContext(AppContext);
 const {guess} = useContext(AppContext);
  const {setMessage} = useContext(AppContext);
  const {setGuess} = useContext(AppContext);

  
  function handleGuess(e) {
    setGuess(e.target.value);
  }
    if (guess === randomValue) {
      setMessage('You got it! ');
    } 
    if(guess > randomValue){
      setMessage('Nope.Lower ');
  }
  if(guess < randomValue){
    setMessage('Nope.Higher ');
}
const updateGuess = (e)=>{
  setGuess(e.target.value);
}
  return (
    <div className="play">
       <h3>Play!</h3>
       <p>
        {`Guess the number between ${lower} and ${upper}`}
       </p>
       <p>{`Last guess:${lastNumber}`}</p>
       <TextField name={"Guess"} labelValue={"Guess:"} handleChange={updateGuess}/>
       <div>
        <Button placeholder={"Make Guess"} onclick={handleGuess} />
       </div>
       
    </div>
  );
}

export default Play;