import BannermainImg from "../images/bannermain.png";

import "../Styles/bannermain.css";

export default function BannerMain() {
  return (
    <div className="banner-principal">
        <img src={BannermainImg} alt="" />
      <div className="box-text">
        <h2>Hotaliças frescas todos os dias</h2>
        <button className="btn-banner">Veja mais produtos</button>
      </div>
    </div>
  );
}
