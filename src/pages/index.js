import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Udub Web Design</h1>
        <p>Welcome to Udub Software Solutions.</p>
        <p>We build great websites.</p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
