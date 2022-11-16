import { useState } from 'react';

export default function  OldTeam() {
    let [data, setData] = useState("");
    
    let apiKey = String(process.env.REACT_APP_TBA_AUTH_KEY);
    const url  = String(process.env.REACT_APP_TBA_URL) + "/team/frc58";
    var xmlhttp = new XMLHttpRequest();
    var teams = "";
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("X-TBA-Auth-Key", apiKey);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var response = this.responseText;
            setData(response)
        }
    };
    // Send request
	xmlhttp.send();

    console.log(data)

    return (
        <div>
            <h1>Team 58 data</h1>
            <div>{data}</div>
        </div>
    );
}
