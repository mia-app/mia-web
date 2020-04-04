import { useState } from "react";

const Home = () => {
  const [string, setString] = useState("");

  const getString = async () => {
    const string = await fetch(
      "http://localhost:3000/api/helloworld"
    ).then((res) => res.json());

    setString(string);
  };

  return (
    <div>
      <h1>Corona Chat Bot</h1>

      <button onClick={getString}>click to get string</button>

      <h2>The string is: {string}</h2>
    </div>
  );
};

export default Home;
