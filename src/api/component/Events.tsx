import axios from "axios";
import React from 'react';

interface ITeam {
    teamKey: string;
    nickname: string;
    state_prov: string;
  }

const teamValues:ITeam[] = [];

export const Events = () => {

    const [team, setTeam]: [ITeam[], (team: ITeam[]) => void] = React.useState(teamValues);

    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);

    const [error, setError]: [string, (error: string) => void] = React.useState("");

    React.useEffect(() => {
        axios
        .get<ITeam[]>("https://www.thebluealliance.com/apidocs/v3/team/frc58", {
            headers: 
            {
                "X-TBA-Auth-Key": "SnDnVbgc07qXx6aIsE7qvhn9lp2yIf1nFOk85A10rd9QXJYCMipZ1PxZWcdoQMY4",
                "Access-Control-Allow-Origin": "*"
            },})
        .then(response => {
            setTeam(response.data);
            setLoading(false);
          })
        .catch(ex => {
            const error =
            ex.response.status === 404
              ? "Resource Not found"
              : "An unexpected error has occurred";
            setError(error);
            setLoading(false);
          });
      }, []);

      return (
        <div className="App">
         <ul className="posts">
           {team.map((team) => (
            <li key={team.teamKey}>
             <h3>{team.nickname}</h3>
             <p>{team.state_prov}</p>
            </li>
          ))}
         </ul>
         {error && <p className="error">{error}</p>}
       </div>
       );

}
