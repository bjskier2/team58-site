import { useState } from "react";

type Props = {
  onChange: (count: string) => void;
  name: string;
};

export default function PlusMinus({ onChange, name }: Props) {
    let [count, setCount] = useState(0);

    function incrementCount() {
      count = count + 1;
      setCount(count);
      onChange(String(count));
    }

    function decrementCount() {
      count = count - 1;
      setCount(count);
      onChange(String(count));
    }

    return (
      <div style={{fontFamily: "sans-serif", textAlign: "center"}}>
          <div>{name}</div>
          <div>{count}</div>
          <button onClick={incrementCount}>+</button>
          <button onClick={decrementCount}>-</button>
      </div>
    );
}