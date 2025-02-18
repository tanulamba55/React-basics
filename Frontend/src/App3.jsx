import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App3() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const URL = "https://randomuser.me/api/";
    const xhr = new XMLHttpRequest();

    xhr.open("GET", URL);
    console.log("reached here");
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(data.results[0]);
        setUser(data.results[0]);
      }
    };
    xhr.send();
  }, []);

  if (error) {
    return <h2>Something went wrong!</h2>;
  }

  if (Object.keys(user).length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Hey! Random User Generator API Call</h2>
      <h1>
        The current user: {user.name.first}
        {user.name.last}
      </h1>
      <h3>Gender : {user.gender}</h3>
      <h3>Gender : {user.dob.age}</h3>
    </>
  );
}

export default App3;
