import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">MyShop</Link>
      <div className="navbar">
        <Link to="/">
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/about">
          <i className="fas fa-info-circle"></i> About Us
        </Link>
        <div className="login-txt">
            <Link to='/login' className='login'>Login</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
