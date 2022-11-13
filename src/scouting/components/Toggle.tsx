import { useState } from "react";

type Props = {
  onChange: (flag: boolean) => void;
  name: string;
};

export default function Toggle({ onChange, name }: Props) {
    let [flag, setFlag] = useState(false);

    function handleChange() {
        const newval = !flag;
        setFlag(newval);
        onChange(newval);
    }
      return (
        <div style={{fontFamily: "sans-serif", textAlign: "center"}}>
          <div>{name}</div>
          <input 
            id="checkbox" 
            type="checkbox" 
            checked={flag}
            onChange={handleChange} /> 
        </div>
        
      );
}