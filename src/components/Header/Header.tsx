import { Sidenav } from "../Sidenav/Sidenav";
import menuIcon from "../../assets/images/icon-menu.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import profileIcon from "../../assets/images/image-avatar.png";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
import "./Header.scss";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header className="header">
      <div className="header__menu">
        <span>
          <img 
            className="header__menu-icon" 
            src={menuIcon} 
            onClick={toggleDrawer(true)}/>
          <Sidenav open={open} setOpen={setOpen}/>
        </span>
        <img src={logo} alt="Sneakers logo" />
      </div>
      <div className="header__cart-and-profile">
        <img src={cartIcon} alt="" />
        <img src={profileIcon} alt="" />
      </div>
    </header>
  );
};
