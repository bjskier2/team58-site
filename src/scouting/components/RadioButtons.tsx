import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

enum Climber {
  None = "None", 
  Low = "Low",
  Middle = "Middle",
  High = "High",
  Traverse = "Traverse"
}

type Props = {
  onChange: (state: string) => void;
};

export default function Toggle({ onChange }: Props) {
  const [selectedClimb, setSelectedClimb] = useState<String>(Climber.None);

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedClimb(event.target.value);
    onChange(event.target.value);
  };


  return (
    <div>
      <RadioGroup
        onChange={radioHandler}
        value={selectedClimb}
        row={true}
      >
        <FormControlLabel
          value={Climber.None}
          control={<Radio checked={selectedClimb === Climber.None} />}
          label={Climber.None}
        />
        <FormControlLabel
          value={Climber.Low}
          control={<Radio checked={selectedClimb === Climber.Low} />}
          label={Climber.Low}
        />
        <FormControlLabel
          value={Climber.Middle}
          control={<Radio checked={selectedClimb === Climber.Middle} />}
          label={Climber.Middle}
        />
        <FormControlLabel
          value={Climber.High}
          control={<Radio checked={selectedClimb === Climber.High} />}
          label={Climber.High}
        />
        <FormControlLabel
          value={Climber.Traverse}
          control={<Radio checked={selectedClimb === Climber.Traverse} />}
          label={Climber.Traverse}
        />
      </RadioGroup>
    </div>
      
  );
}

