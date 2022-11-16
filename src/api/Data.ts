import { useEffect } from "react";

export function useTBAData(path: string) {
  const url  = String(process.env.REACT_APP_TBA_URL) + path;
  const apiKey = String(process.env.REACT_APP_TBA_AUTH_KEY);
  var data = null;

  useEffect(() => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("X-TBA-Auth-Key", apiKey);
    xmlhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var response = this.responseText;
        data = response;
      }
    };
    xmlhttp.send();

  }, []);

  return data;

}