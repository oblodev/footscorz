import "./Header.css";
import logo from "../../../images/footscorz.jpg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
