import { TextField } from "@mui/material";
import {
  ChangeEvent, ReactNode
} from "react";
import QRCode from "react-qr-code";

interface QRBoxProps {
    children: ReactNode;
    setQrCodeText: (qrCodeText: string) => void;
    qrValue: string;
    pushToSlack: () => void;
}

const QRBox = ({
    children,
    setQrCodeText,
    qrValue,
    pushToSlack
   }: QRBoxProps) => {
   
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setQrCodeText(event.target.value);
    };

    const onClick = () => {
      pushToSlack();
    }
   
    return (
      <div style={{ backgroundColor: "gray", padding: "20px" }}>
        <QRCode value={qrValue} size={128} level='H' onClick={onClick} />
        <TextField 
          value={qrValue}
          onChange={handleChange}
          sx={{ padding: "20px", width: "500px" }}
        />
      </div>
    );
   };
   
   export default QRBox;
