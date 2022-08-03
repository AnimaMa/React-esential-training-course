import "./App.css";
import React, { useEffect, useState } from "react";

interface user {
  login: string;
}

const App = (user) => {
  const [data, setData] = useState<user[]>([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/AnimaMa`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(() => setLoading(false));
  }, []);

  console.log(data);
  return (
    <div>
      {Object.keys(data).map((key, i) => (
        <div>
          <b>{key}</b>
          <p>{data[key]}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
