import React from "react"
import { Link } from "gatsby"

const Post = ({ title, author, path, date, body }) => {
  return(
      <div className="post">
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