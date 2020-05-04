import React from "react"
import { Link } from "gatsby"

import Logo from "../assets/images/footer-logo.svg"

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
    <ul>
      <li><Link to="/">Facebook</Link></li>
      <li><Link to="/about/">Instagram</Link></li>
      <li><Link to="/contact/">Twitter</Link></li>
    </ul>
  </div>
</footer>
