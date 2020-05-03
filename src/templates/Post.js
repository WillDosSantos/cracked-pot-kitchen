import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Post = ({ title, author, path, date, body, fluid }) => {
  return(
      <div className="post">
        <Img className="post-image-top" fluid={fluid}/>
        <div className="post-body">
          <h1 className="post-title">
            <Link to={path}>{title}</Link>
          </h1>
          <div className="post-info">
            <span>{date}</span> by{' '}
            <span>{author}</span>
          </div>
          <div className="post-text">{body}</div>
          <Link to={path} className="btn">Read More</Link>
        </div>
      </div>
  )
}

export default Post