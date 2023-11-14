import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PieChart } from "@mui/x-charts/PieChart";

const AttendanceTable = ({ attendanceData }) => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <Box>
      <TableContainer
        component={Paper}
        style={{
          width: "90%",
          margin: "auto",
          backgroundColor: "#ded6d6",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {daysOfWeek.map((day) => (
                <TableCell
                  key={day}
                  style={{
                    borderBottom: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    padding: "0.5rem",
                    borderRight: "80px solid #ded6d6", // Add right border for spacing
                    textAlign: "center",
                  }}
                >
                  {day}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              {daysOfWeek.map((day) => (
                <TableCell
                  key={`${day}-date`}
                  sx={{
                    borderBottom: "none",
                    fontSize: "0.9rem",
                    paddingLeft: "1rem",
                    padding: "0.5rem",
                    borderRight: "80px solid #ded6d6", // Add right border for spacing
                    textAlign: "center",
                  }}
                >
                  {attendanceData[day]?.date}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiTableCell-root": {
                borderBottom: "none",
              },
            }}
          >
            {["fn", "an"].map((status) => (
              <TableRow key={status}>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    padding: "0.5rem",
                  }}
                >
                  {status.toUpperCase()}
                </TableCell>
                {daysOfWeek.map((day, index) => (
                  <TableCell
                    key={`${day}-${status}`}
                    style={{
                      backgroundColor:
                        attendanceData[day]?.[status] === "absent"
                          ? "red"
                          : "green",
                      borderBottom: "none",
                      padding: "0.5rem",
                      textAlign: "center",
                      borderRight:
                        index < daysOfWeek.length - 1
                          ? "80px solid #ded6d6" // Add right border for spacing
                          : "none",
                    }}
                  >
                    {attendanceData[day]?.[status]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const StudentProfile = ({ data }) => {
  const {
    NAME,
    ATTENDANCE,
    homework,
    "Behavioral Analytics": behavioralAnalytics,
  } = data;

  const countValues = behavioralAnalytics.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  // Extract labels and data for Chart.js
  const labels = Object.keys(countValues);
  const dataPoints = Object.values(countValues);

  // Prepare series data for PieChart
  const seriesData = [
    {
      data: labels.map((label, index) => ({
        id: index,
        value: dataPoints[index],
        label: label,
      })),
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f9e7e7",
        minHeight: "100vh",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          textAlign={"left"}
          sx={{
            fontSize: "2rem",
            marginLeft: "1rem",
            marginTop: "1rem",
          }}
        >
          HELLO {NAME}!!
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h5" textAlign={"center"}>
          ATTENDANCE
        </Typography>
        <AttendanceTable attendanceData={ATTENDANCE} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch", // Set to "stretch" to make boxes equal height
          width: "90%",
          margin: "auto",
        }}
      >
        <Box
          mt={4}
          mr={2} // Add margin-right for spacing between the boxes
          sx={{
            flex: 1,
            backgroundColor: "#ded6d6",
          }}
        >
          <Typography variant="h5" mt={2}>
            Homeworks
          </Typography>
          <ul
            style={{
              textAlign: "left",
            }}
          >
            {homework.map((subject, index) => (
              <li
                style={{
                  listStyleType: "none",
                  fontSize: "1.2rem",
                  lineHeight: "2rem",
                }}
                key={index}
              >
                {subject.toUpperCase()}
              </li>
            ))}
          </ul>
        </Box>

        <Box
          mt={4}
          ml={2} // Add margin-left for spacing between the boxes
          sx={{
            flex: 1,
            backgroundColor: "#ded6d6",
          }}
        >
          <Typography variant="h5" mt={2}>
            Behavioral Analytics
          </Typography>
          <PieChart
            height={150}
            width={400}
            series={seriesData}
            colors={["green", "red"]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StudentProfile;
