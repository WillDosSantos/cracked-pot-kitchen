import React from  "react"
import {graphql, Link} from "gatsby"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"

import Layout from "../pages/components/layout"

const SinglePost = ({data}) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className="content">
            <Img className="post-image-top" fluid={post.featuredImage.childImageSharp.fluid}/>
      <h1>{post.title}</h1>
      <span>{post.date}</span> by{" "}
      <span>{post.author}</span>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}/>
      <ul>
        {post.tags.map(tag => (
          <li key={tag}>
            <Link to={`/tag/${slugify(tag)}`}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!){
    markdownRemark(fields: { slug: { eq: $slug }}){
      id
      html
      frontmatter{
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        featuredImage{
          childImageSharp{
            fluid(maxWidth: 700){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost