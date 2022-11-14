import { useState } from "react";
import { Box, Flex } from "theme-ui";
import PlusMinus from "./PlusMinus";
import QRBox from "./QRCode";
import RadioButtons from './RadioButtons';
import Toggle from './Toggle';

const ScoutForm = () => {

  const data:  { [key: string]: string  } = { 
      "autoHigh": "0",
      "autoLow": "0",
      "autoTaxi": "false",
      "teleopHigh": "0",
      "teleopLow": "0",
      "climb": "None"
  }

  const [scoring, setScoring] = useState(data) ;

  const [qrValue, setQrValue] = useState<string>(JSON.stringify(data));

  const updateKey = (key: string, value: string) => {
    const listCopy = scoring;
    scoring[key] = value;
    setScoring(listCopy);
    setQrValue(JSON.stringify(scoring));
    console.log(scoring);
  }

  const autoLow = (count: string) => {
    updateKey("autoLow", count);
  }

  const autoHigh = (count: string) => { 
    updateKey("autoHigh", count);
  }

  const autoTaxi = (flag: boolean) => {
    updateKey("autoTaxi", String(flag));
  }

  const teleopHigh = (count: string) => { 
    updateKey("teleopHigh", count);
  }

  const teleopLow = (count: string) => { 
    updateKey("teleopLow", count);
  }

  const climber = (state: string) => { 
    updateKey("climb", state);
  }

  const postToSlack = () => {
    const json:  { [key: string]: string  } = { 
      "text": JSON.stringify(qrValue)
    }

   var xmlhttp = new XMLHttpRequest();
   var url = String(process.env.REACT_APP_SLACK_WEBHOOK);
   xmlhttp.open("POST", url, true);
   xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var response = this.responseText;
    }
  };
  // Send request
  xmlhttp.send(JSON.stringify(json));
  
  }
   
  return (
    <section >
        <QRBox
          setQrCodeText={setQrValue}
          qrValue={qrValue}
          pushToSlack={postToSlack}
        >
          <h1>QR Code</h1>
        </QRBox>
        <Flex 
        >
          <h1 style={{ padding: "20px" }}>Auto</h1>
            <Box 
              sx={{ padding: "10px" }}
            >
               <PlusMinus name="High Hub" onChange={autoHigh}/>
            </Box>
            <Box 
              sx={{ padding: "10px" }}
            >
                <PlusMinus name="Low Hub" onChange={autoLow}/>
            </Box>
            <Box 
              sx={{ padding: "10px" }}
            >
                <Toggle 
                  name="Taxi"
                  onChange={autoTaxi}  
                />
            </Box>

        </Flex>
        <Flex 
        >
            <h1 style={{ padding: "20px" }}>Tele</h1>
            <Box 
              sx={{ padding: "10px" }}
            >
               <PlusMinus name="High Hub" onChange={teleopHigh}/>
            </Box>
            <Box 
              sx={{ padding: "10px" }}
            >
                <PlusMinus name="Low Hub" onChange={teleopLow}/>
            </Box>
        </Flex>
        <Flex 
        >
            <h1 style={{ padding: "20px" }}>Climb</h1>
            <Box 
              sx={{ padding: "10px" }}
            >
              <RadioButtons onChange={climber} />
            </Box>
        </Flex>
    </section>
  );
  
};
  
export default ScoutForm;

