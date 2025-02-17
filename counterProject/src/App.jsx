import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// const ChildComponent = (props) =>{
//   return <h2>It's a child component. {props.p1}</h2>
// }

// const ChildComponent1 = (props) =>{
//   let {p1} = props;
//   return <h2>It's a child component. {p1}</h2>
// }

// const ChildComponent2 = ({p1}) =>{
//   return <h2>It's a child component. {p1}</h2>
// }

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Use effect accessed");
  }, []);

  // let counter = 2;
  const addVal = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  };

  const removeVal = () => {
    console.log("removed count", counter);
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addVal}>Add Value</button>

      <br />
      <button onClick={removeVal}>Remove Value</button>
      {/* 
      <ChildComponent p1="tanu"/>
      <ChildComponent1 p1="vijay"/>
      <ChildComponent2 p1="vijay"/> */}
    </>
  );
}

export default App;
