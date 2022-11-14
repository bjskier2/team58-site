import { useState } from 'react';

export default function  Team() {
    let [data, setData] = useState("");
    
    const authKey = "SnDnVbgc07qXx6aIsE7qvhn9lp2yIf1nFOk85A10rd9QXJYCMipZ1PxZWcdoQMY4";
    const url  = "https://www.thebluealliance.com/api/v3/team/frc58";
    var xmlhttp = new XMLHttpRequest();
    var teams = "";
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var response = this.responseText;
            setData(response)
            console.log(data)
        }
    };
    // Send request
	xmlhttp.send();

    return (
        <div>
            <h1>Team 58 data</h1>
            <div>{data}</div>
        </div>
    );
}

