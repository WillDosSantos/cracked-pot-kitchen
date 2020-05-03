import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Post from "../../templates/Post"

const RecentPosts = () => (
  <section>
    <h1>Recent Recipes</h1>
    <StaticQuery query={recentQuery} render={data => {
      return (
        <div className="content content--posts">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post
              key={node.id}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              path={node.frontmatter.path}
              date={node.frontmatter.date}
              body={node.excerpt}
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              tags={node.frontmatter.tags}
            />
          ))}
        </div>
      )
    }}/>
  </section>
)

const recentQuery = graphql`
  query recentQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ){
      edges{
        node{
          id
          frontmatter{
            title
            date(formatString: "MMM Do YYYY")
            author
            path
            tags
            featuredImage{
              childImageSharp{
                fluid(maxWidth: 300){
                  ...GatsbyImageSharpFluid 
                }
              }
            }
          }
        }
      }
    }
  }
`

export default RecentPosts