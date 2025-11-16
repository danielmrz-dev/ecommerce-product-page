import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import React from "react";
import "./Sidenav.scss";
import closeIcon from "../../assets/images/icon-close.svg";

const menuOptions = ["Collections", "Men", "Women", "About", "Contact"];

type SidenavProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Sidenav: React.FC<SidenavProps> = ({ open, setOpen }) => {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box className="links" sx={{ width: 250 }} role="alert" onClick={toggleDrawer(false)}>
      <List>
        {menuOptions.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText className="links__list-item" primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer className="drawer" open={open} onClose={toggleDrawer(false)}>
      <img src={closeIcon} alt="" onClick={toggleDrawer(false)} />
      {DrawerList}
    </Drawer>
  );
};
