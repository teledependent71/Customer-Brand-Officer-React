import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Brand Officer</title>
        <meta property="og:title" content="Customer Brand Officer" />
      </Helmet>
    </div>
  )
}

export default Home
