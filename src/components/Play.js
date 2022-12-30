import TextField from "./reusables/TestField";
import Button from "./reusables/Button";
import React, {useContext } from "react";
import AppContext from "../AppContext";

function Play() {

  const {lower, upper} = useContext(AppContext);

  return (
    <div className="play">
       <h3>Play!</h3>
       <p>
        {`Guess the number between ${lower} and ${upper}`}
       </p>
       <TextField name={"Guess"} labelValue={"Guess:"} />
       <div>
        <Button placeholder={"Make Guess"} />
       </div>
       
    </div>
  );
}

export default Play;