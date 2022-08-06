import React, { useState } from "react";

export interface ComponentUseStateProps {}

export const ComponentUseState = (props: ComponentUseStateProps) => {
  const {} = props;
  const [checked, setChecked] = useState(false);
  return (
    <section >
      <input
        type={"checkbox"}
        value={JSON.stringify(checked)}
        onChange={() => setChecked(!checked)}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </section>
  );
};
