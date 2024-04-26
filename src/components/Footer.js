import {
  Android,
  Apple,
  Facebook,
  Instagram,
  Telegram,
  Twitter,
  Youtube
} from "react-bootstrap-icons";
import logo from "../assets/spartlogo.PNG";
import { Link } from "react-router-dom";
import './styles/footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="newletter">
        <span>Subscribe to our news letter to get update on new products</span>
        <div className="newsletter-child">
          <input type="email" placeholder="Enter email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="main-footer">
        <div className="top">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="download">
            <span>Download SpartApp</span>
            <div className="btns">
              <Link to={""}>
                <span className="icon"><Apple /></span>
                <div>
                  <p>download on the</p>
                  <span>App Store</span>
                </div>
              </Link>
              <Link to={""}>
                <span className="icon"><Android /></span>
                
                <div>
                  <p>Get it on</p>
                  <span>Google Play</span>
                </div>
              </Link>
            </div>
          </div>
        </div>


        <div className="down">
          <div className="affiliates ft-container">
              <h1>SpartApp partners</h1>
            <div className="contain">
              <Link to={''}>China</Link >
              <Link to={''}>India</Link >
              <Link to={''}>USA</Link >
              <Link to={''}>Perkins</Link >
              <Link to={''}>Mikano</Link >
            </div>
          </div>
          <div className="affiliates ft-container">
              <h1>About SpartApp</h1>
            <div className="contain">
              <Link to={''}>About us</Link>
              <Link to={''}>SpartApp Express</Link>
              <Link to={''}>Privacy & PoLinkcy</Link>
              <Link to={''}>Terms & conditions</Link>
              <Link to={''}>Official stores</Link>
              <Link to={''}>SpartApp Careers</Link>
              <Link to={''}>SpartApp Dealers</Link>
            </div>
          </div>
          <div className="ft-container">
            <h1>Need Help ?</h1>
            <div className="help contain">
              <Link to={''}>Help center</Link>
              <Link to={''}>Contact Us</Link>
              <Link to={''}>Ship your package</Link>
              <Link to={''}>Refunds policy</Link>
              <Link to={''}>Bulk purchase</Link>
            </div>
          </div>
          <div className="ft-container">
            <h1>Join US ON</h1>
            <div className="icons">
              <span>
                <Facebook />
              </span>
              <span>
                <Instagram />
              </span>
              <span>
                <Twitter />
              </span>
              <span>
                <Telegram />
              </span>
              <span>
                <Youtube />
              </span>
            </div>
          </div>
        </div>
      </div>

    <p className="powered">Powered by <Link to='https://www.givitec.com'>GIVITEC LTD</Link></p>
    </div>
  );
};

export default Footer;
