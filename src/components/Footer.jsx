import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-links">
          <p>MyShop @ 2025 All rights reserved </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/nimmiev/" target="_blank">
                <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="Linked in" width={'30px'} height={'30px'}></img>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  