import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"

import Hero from "./assets/images/hero-image.png"
import { graphql, StaticQuery } from "gatsby"
import Post from "../templates/Post"
import RecentPosts from "./components/recent"


const IndexPage = () => (
  <Layout>
    <section>
      <div className="content d-f content--hero">
        <div 
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-duration="900"
          data-sal-easing="ease" 
          className="hero-info">
          <h1>Good food, crazy ideas, and lots of fun</h1>
          <p className="tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a className="btn btn--primary" href="">Subscribe</a>
        </div>
        <img 
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-duration="900"
          data-sal-easing="ease" 
          src={Hero} alt="Hero Plate"/>
      </div>
    </section>
    <RecentPosts/>
    <section>
      <div className="content">
        <h1 className="section-header">Recipes</h1>
        <StaticQuery query={indexQuery} render={data => {
          return (
            <div className="content content--posts">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                />
              ))}
            </div>
          )
        }}/>
      </div>
    </section>
  </Layout>
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
            tags
            featuredImage{
              childImageSharp{
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
