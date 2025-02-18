import "./App.css";
import { useEffect, useState } from "react";

const App2 = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setError(false);
        const response = await fetch("https://randomuser.me/api/");
        console.log(response);

        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }

        const data = await response.json();
        console.log(data.results[0].name);
        setUser(data.results[0]);
      } catch (error) {
        setError(true);
      }
    };

    fetchUser();
  }, []);

  if (Object.keys(user).length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Hey! Random User Generator API Call</h2>
      <h1>
        The current user: {user} {user}
      </h1>
      <h3>Gender : {user}</h3>
      <h3>Age : {user}</h3>
    </>
  );
};

export default App2;
