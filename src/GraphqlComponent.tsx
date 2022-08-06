import React, { useEffect, useState } from "react";

export interface GraphqlComponentProps {}
interface user {
  login: string;
}

export const GraphqlComponent = (props: GraphqlComponentProps) => {
  const {} = props;

  const [data, setData] = useState<user[]>([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/AnimaMa`, options)
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  const query = `
    query {
        login
        location
    }
  `;

  const options = {
    method: "POST",
    headers: { "Content-Type": "applications/json" },
    body: JSON.stringify({ query }),
  };
  console.log(data);
  return (
    <>
      <h1></h1>
    </>
  );
};
