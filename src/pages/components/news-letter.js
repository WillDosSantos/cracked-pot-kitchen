import React from "react"

const NewsLetter = () => (
  <section className="section--color">
    <div className="content d-f newsletter-content">
      <div className="f-1">
        <h1>Our Newsletter</h1>
        <p>Join our newsletter to recieve all of the latest recipes, tips, and techniques. And don't worry. We promise we won't spam you.</p>
          <div style={{ marginTop: `20px`, }} className="input-container input-standard">
            <input type="email" name="email" placeholder="Your email..."/>
          </div>
        </div>

    </div>
  </section>
)

export default NewsLetter