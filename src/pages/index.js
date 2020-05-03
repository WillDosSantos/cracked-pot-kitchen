import React from "react"
import { Link } from "gatsby"
import Header from "./components/header"
import "./styles/main.scss"
import Hero from "./assets/images/hero-image.png"
import { graphql, StaticQuery } from "gatsby"
import Post from "../templates/Post"


const IndexPage = () => (
  <div>
    <Header/>
    <section>
      <div className="content d-f content--hero">
        <div className="hero-info">
          <h1>Good food, crazy ideas, and lots of fun</h1>
          <p className="tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a className="btn btn--primary" href="">Subscribe</a>
        </div>
        <img src={Hero} alt="Hero Plate"/>
      </div>
    </section>
    <StaticQuery query={indexQuery} render={data => {
      return (
        <div className="content">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post 
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              path={node.frontmatter.path}
              date={node.frontmatter.date}
              body={node.excerpt}
            />
          ))}
        </div>
      )
    }}/>
  </div>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            path
          }
        }
      }
    }
  }
`

export default IndexPage
