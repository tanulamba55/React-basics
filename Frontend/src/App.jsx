import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        const User1 = await axios.get("https://randomuser.me/api/");
        console.log(User1.data.results[0].name);
        setUser(User1.data.results[0]);
      } catch (error) {
        setError(true);
      }
    })();
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
        The current user: {user.name.first} {user.name.last}
      </h1>
      <h3>Gender : {user.gender}</h3>
      <h3>Gender : {user.dob.age}</h3>
    </>
  );
}

export default App;
