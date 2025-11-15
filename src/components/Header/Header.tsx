import { Sidenav } from "../Sidenav/Sidenav";
import menuIcon from "../../assets/images/icon-menu.svg";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header className="header">
      <div>
        <img src={menuIcon} tabIndex={1} alt="" onClick={toggleDrawer(true)} />
        <Sidenav open={open} setOpen={setOpen}/>
      </div>
      <img src={logo} alt="" />
    </header>
  );
};
