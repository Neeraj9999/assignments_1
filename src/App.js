import React, { useState } from "react";
import One from "./screens/One";
import Two from "./screens/Two";

export default function App() {
  const [flag, setFlag] = useState(false);
  return <div className="app">
    <div className="actionRow">
      <button onClick={() => setFlag(prev => !prev)}>Toggle</button>
    </div>
    {flag ? <One /> : <Two />}
    </div>;
}
