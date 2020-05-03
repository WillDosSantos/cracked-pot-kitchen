import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return(
      <div className="post">
        <Img className="post-image-top" fluid={fluid}/>
        <div className="post-body">
          <h1 className="post-title">
            <Link to={slug}>{title}</Link>
          </h1>
          <div className="post-info">
            <span>{date}</span> by{' '}
            <span>{author}</span>
            <ul className="tags">
              {tags.map(tag => (
                <li key={tag}>
                  <Link to={`/tag/${slugify(tag)}`}>
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="post-text">{body}</div>
          <Link to={slug} className="btn">Read More</Link>
        </div>
      </div>
  )
}

export default Post