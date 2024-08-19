import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons/buttons";
import Display from "./components/Display/display";
import Heading from "./components/heading/heading";

function App() {
  let [calValue, setcalValue] = useState("");
  let [demo,setDemo]=useState('ketan')
  function buttonOnClick(e) {
    console.log(e);

    if (e === "c") {
      setcalValue('');
      setDemo('')
    } else if (e === "=") {
      let Results = eval(calValue)
      let newdemo = calValue;
      setcalValue(Results)
      setDemo(newdemo)
    } else {
      let newCalvalue = calValue + e;
      setcalValue(newCalvalue);
    }
  }

  return (
    <>
      <div className="conatiner">
        <Heading demo={demo}></Heading>
        
        <Display calValue={calValue}></Display>
        <Buttons buttonOnClick={(e) => buttonOnClick(e)}></Buttons>
      </div>
    </>
  );
}

export default App;
