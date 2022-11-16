import { useEffect, useState } from "react";

export interface Team {
  city?: string,
  key: string,
  motto?: string,
  name?: string,
  nickname?: string,
  rookie_year?: number,
  school_name?: string,
  state_prov?: string,
  team_number?: number,
  website?: string
}


function NewTeam() {

  const [data, setData] = useState<Team>({key:''});

  const fetchData = () => {
    fetch(String(process.env.REACT_APP_TBA_URL_TEAM), {
      headers: {
        'X-TBA-Auth-Key': String(process.env.REACT_APP_TBA_AUTH_KEY),
      },
    })
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Team #</th>
            <th>Nickname</th>
            <th>Rookie Year</th>
            <th>Website</th>
          </tr>
          <tr key={data.key}>
            <td>{data.team_number}</td>
            <td>{data.nickname}</td>
            <td>{data.rookie_year}</td>
            <td>{data.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NewTeam;