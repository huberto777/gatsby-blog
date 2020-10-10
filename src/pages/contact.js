import React from "react"
import SEO from "../components/SEO"
import Title from "../components/Title"

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact" />
      <Title title="get in touch" />
      <section className="contact-page">
        <article className="contact-form">
          <form action="https://formspree.io/mdopoqkk" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default ContactPage
