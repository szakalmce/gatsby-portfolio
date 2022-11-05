import React from "react"

const contact = () => {
  return (
    <div className="page-wrapper bg-gray d-flex">
      <div className="container h-100">
        <div className="contact-inner">
          <div className="form-wrapper">
            <form className="form">
              <div className="form-inner">
                <p className="form-title">Get In Touch</p>
                <input type="text" placeholder="NAME" />
                <input type="email" placeholder="EMAIL" />
                <textarea rows="7" placeholder="MESSAGE" />
              </div>
              <button className="btn btn-form" type="submit">
                Submit here
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact
