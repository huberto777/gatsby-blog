import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Pager = ({ currentPage, numPages }) => (
  <nav className="pagination">
    {currentPage > 1 ? (
      <Link title="Go to previous images" to={`/images/${currentPage - 1}`}>
        ← Previous
      </Link>
    ) : (
      <span />
    )}
    {/* {Array.from({ length: numPages }, (_, i) => (
        <Link key={`pagination-number${i + 1}`} to={`/images/${i + 1}`}>
          {i + 1}
        </Link>
      ))} */}
    Page {currentPage} of {numPages}
    {currentPage < numPages ? (
      <Link title="Go to next images" to={`/images/${currentPage + 1}`}>
        Next →
      </Link>
    ) : (
      <span />
    )}
  </nav>
)

Pager.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
}

export default Pager
