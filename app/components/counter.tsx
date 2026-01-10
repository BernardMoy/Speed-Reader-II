"use client";
import { useState } from "react";

export const Counter = () => {
  console.log("Counter");
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
};
