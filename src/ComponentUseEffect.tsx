import React, { useState } from "react";

export interface ComponentUseEffectProps {}

export const ComponentUseEffect = (props: ComponentUseEffectProps) => {
  const {} = props;
  const [name, setName] = useState("Aurel");

  return (
    <section className="p-20">
      <div>Name is : {name}</div>
      <button type="submit" onClick={() => setName("Milo")} className='bg-teal-400 p-2'>
        click me
      </button>
    </section>
  );
};
