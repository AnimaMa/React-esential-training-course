import "./App.css";
import React, { useEffect, useState } from "react";
import { ComponentUseState } from "./ComponentUseState";
import { ComponentUseEffect } from "./ComponentUseEffect";

interface user {
  login: string;
}

const App = () => {
  const [data, setData] = useState<user[]>([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/AnimaMa`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <p>Loading..</p>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <ComponentUseEffect />

      {/* // */}
      {Object.keys(data).map((key) => (
        <div className="flex gap-6">
          <b className="italic text-violet-600">{key}</b>
          {key === "avatar_url" && (
            <img src={data[key]} width="50px" height={"50px"} />
          )}
          <p>{data[key]}</p>
        </div>
      ))}

      <ComponentUseState />
    </div>
  );
};

export default App;
