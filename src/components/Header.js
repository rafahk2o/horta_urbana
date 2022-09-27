import "../Styles/header.css"
import {GiHamburgerMenu} from 'react-icons/gi'
import Avatar from "../images/Logo.png";

export default function Header() {
    return (
      <div className="header-top">
        <div className="logo">
            <img src={Avatar} alt="" />
        </div>
        <div className="menu">
<GiHamburgerMenu/>
        </div>
       
      </div>
    );
  }