import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"
import pic1 from "./assets/images/pic-1.png"


export default () => (
  <Layout>
    <div className="content">
      <article>
        <h1>Our Family</h1>
        <img style={{
          maxWidth: `400px`,
          padding: `0 2em 0 2em`,
        }} className="push-left" src={pic1} alt="Amaury and Sheila Dos Santos"/>
        <p>For many years, my dad has been regarded as the go-to-guy for crazy flavors, and outrages ideas when it comes to both cooking and life. This site, is a gathering of information that I have grown up with, and now we want to share what knowledge we have with everyone else.</p>
        
      </article>
      <article>
        <h1>Uma Boa Ideia</h1>
        <p>The idea of creating a written source of typical Brazilian dishes started more than 40 years ago when I was exposed to the need to eat better than when I lived outside my family. The objectivity made me write the recipes with measurements of the ingredients, as much as possible, exact and defined, so that they can be reproduced even by those who do not live with stoves and ovens. I based this process on typical Brazilian foods of where I come from. There are variations from one end to the other of the Brazilian territory that I did not take into account in this process in order to facilitate the user that after a certain cooking practice, each one will be able to make the small modifications more to their taste.</p>
      </article>
    </div>
  </Layout>
)