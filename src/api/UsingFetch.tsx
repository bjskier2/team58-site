import { useEffect, useState } from "react";


interface ITeam {
  address: string,
  city: string,
  country: string,
  gmaps_place_id: string,
  gmaps_url: string,
  key: string,
  lat: string,
  lng: string,
  location_name: string,
  motto: string,
  name: string,
  nickname: string,
  postal_code: string,
  rookie_year: number,
  school_name: string,
  state_prov: string,
  team_number: number,
  website: string
}

const UsingFetch = (path: string) => {
    const url = String(process.env.REACT_APP_TBA_URL) + path;
    const apiKey = String(process.env.REACT_APP_TBA_AUTH_KEY);
    const [teamData, setTeamData] = useState<ITeam[]>([])

  const fetchData = () => {
    fetch(url, {
      headers: {
        'X-TBA-Auth-Key': apiKey,
      },
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTeamData(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {teamData.length > 0 && (
        <ul>
          {teamData.map(data => (
            <li key={data.key}>{data.motto}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch;
