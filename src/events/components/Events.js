import { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


export default function Events() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(String(process.env.REACT_APP_TBA_URL_TEAM_EVENT), {
      headers: {
        'X-TBA-Auth-Key': String(process.env.REACT_APP_TBA_AUTH_KEY),
      },
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        setData(data);
      })
    }
    useEffect(( ) => {
      fetchData()
    }, [])

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Event Location</TableCell>
            <TableCell align="right">Event Type</TableCell>
            <TableCell align="right">Start Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.key}  >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.location_name}</TableCell>
              <TableCell align="right">{row.event_type_string}</TableCell>
              <TableCell align="right">{row.start_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

//style ={ row.rank % 2? { background : "#fdffe0" }:{ background : "white" }