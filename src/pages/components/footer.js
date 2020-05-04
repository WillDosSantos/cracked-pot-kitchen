import React from "react"
import { Link } from "gatsby"

import Logo from "../assets/images/footer-logo.svg"
import Youtube from "../assets/images/youtube.svg"
import Facebook from "../assets/images/facebook.svg"
import Instagram from "../assets/images/instagram.svg"

export default () => 
<footer>
  <div className="content content--grid_4">
    <ul>
      <li><img className="footer-logo" src={Logo} alt="Footer Logo"/></li>
      <li>Copyright © {new Date().getFullYear()}</li>
    </ul>
    <ul>
      <li><Link to="/">Recipes</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>
    <ul>
      <li><Link to="/">Terms</Link></li>
      <li><Link to="/about/">Privacy Policy</Link></li>
    </ul>
    <ul className="social-media-links d-f">
      <li>
        <Link to="/">
          <img src={Facebook} alt="Facebook icon"/>
        </Link>
      </li>
      <li>
        <Link to="/about/">
          <img src={Youtube} alt="Youtube icon"/>
        </Link>
      </li>
      <li>
        <Link to="/contact/">
          <img src={Instagram} alt="Instagram icon"/>
        </Link>
      </li>
    </ul>
  </div>
</footer>
