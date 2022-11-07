import { Link } from "gatsby"
import React from "react"

const SuccessMessage = () => {
  return (
    <div className="page-wrapper bg-gray d-flex">
      <div className="container">
        <div className="success-wrapper">
          <h1 className="success-title">Your message was sent successfully!</h1>
          <Link to="/">
            <button className="btn btn-success">Back to homepage</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SuccessMessage
