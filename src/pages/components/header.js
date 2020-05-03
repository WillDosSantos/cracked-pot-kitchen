import React from "react"
import { Link } from "gatsby"

import Logo from "../assets/images/logo.svg"

export default () => 
<div>
  <nav>
    <img className="logo" src={Logo} alt="Cracked Pot Kitchen Logo"/>
    <div className="input-container">
      <input type="search" name="search" placeholder="Search..."/>
    </div>
    <ul>
      <li><Link to="/">Recipes</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>
  </nav>
</div>