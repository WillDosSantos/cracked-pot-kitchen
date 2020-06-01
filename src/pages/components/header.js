import React from "react"
import { Link } from "gatsby"

import Logo from "../assets/images/logo.svg"
import Search from "../assets/images/search.svg"

export default () => 
<div>
  <nav>
    <Link className="logo-container f-1" to="/">
      <img className="logo" src={Logo} alt="Craqued Pot Kitchen Logo"/>
    </Link>
    <div className="input-container">
      <img src={Search} alt="search icon"/>
      <input type="search" name="search" placeholder="Search..."/>
    </div>
    <ul>
      <li><Link to="/">Recipes</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>
  </nav>
</div>