import React, { useRef } from "react";
import "./App.css";

function AppWithRef() {
  const textTitle = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const hexColor = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const submit = (e: any) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}`);
  };
  return (
    <div className="AppWithRef">
      <form onSubmit={submit}>
        <input type="text" ref={textTitle} />
        <input type={"color"} ref={hexColor} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AppWithRef;
