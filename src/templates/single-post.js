import React from  "react"
import {graphql, Link} from "gatsby"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"
import authors from "../util/authors"

import Layout from "../pages/components/layout"

const SinglePost = ({data}) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)
  return (
    <Layout postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
      <div className="content">
        <div className="single-post-header">
          <h1 className="single-post-title">{post.title}</h1>
          <span>{post.date}</span> by{" "}
          <span>{post.author}</span>   
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
        }} className="post-image-top" fluid={post.featuredImage.childImageSharp.fluid}/>
       
        <article>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}/>
        </article>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!){
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
    file(relativePath: { eq: $imageUrl }){
      childImageSharp{
        fluid(maxWidth: 300){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SinglePost