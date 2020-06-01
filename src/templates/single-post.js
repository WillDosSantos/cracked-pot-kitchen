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
        <div className="single-post-header">
          <h1 className="single-post-title">{post.title}</h1>
          <span>{post.date}</span>
          <div className="d-f"
            style={{
              alignItems: 'center',
              padding: '0.5em 0',
            }}
            >
            by{" "}
            <Img className="author-avatar f-1" fluid={post.authorImage.childImageSharp.fluid}/>
            <span>{post.author}</span>
          </div>
          <ul className="tags">
            {post.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  {tag}
                </Link>
              </li>
            ))}
          </ul> 
        </div>
        <Img style={{
          marginBottom: `2em`,
        }} className="post-image-main" fluid={post.featuredImage.childImageSharp.fluid}/>
       
        <article>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}/>
        </article>
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
        authorImage{
          childImageSharp{
            fluid(maxWidth: 100){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost