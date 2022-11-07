import React from "react"

const contact = () => {
  return (
    <div className="page-wrapper bg-gray d-flex">
      <div className="container h-100">
        <div className="contact-inner">
          <div className="form-wrapper">
            <form
              className="form"
              name="portfolio-form"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              action="/success-message"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="portfolio-form" />
              <div className="form-inner">
                <p className="form-title">Get In Touch</p>
                <input name="name" type="text" placeholder="NAME" />
                <input name="email" type="email" placeholder="EMAIL" />
                <textarea name="message" rows="7" placeholder="MESSAGE" />
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
