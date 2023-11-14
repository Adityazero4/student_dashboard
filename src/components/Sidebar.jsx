import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlineHome } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { BiCctv } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        zIndex: 1,
        "& .MuiDrawer-paper": { boxSizing: "border-box", mt: 8 },
      }}
    >
      <List>
        <ListItem onClick={onClose} sx={{ cursor: "pointer" }}>
          <ListItemIcon>
            <AiOutlineHome
              style={{
                fontSize: "1.5rem",
                color: "#000",
                fontWeight: "bold",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Summary Dashboard" />
        </ListItem>
        <ListItem onClick={onClose} sx={{ cursor: "pointer" }}>
          <ListItemIcon>
            <ImBooks
              style={{
                fontSize: "1.5rem",
                color: "#000",
                fontWeight: "bold",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Attendance Tracking" />
        </ListItem>
        <ListItem onClick={onClose} sx={{ cursor: "pointer" }}>
          <ListItemIcon>
            <BiCctv
              style={{
                fontSize: "1.5rem",
                color: "#000",
                fontWeight: "bold",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Behavioral Analytics" />
        </ListItem>
        <ListItem onClick={onClose} sx={{ cursor: "pointer" }}>
          <ListItemIcon>
            <FaBook
              style={{
                fontSize: "1.5rem",
                color: "#000",
                fontWeight: "bold",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Academic Performance Tracking" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
