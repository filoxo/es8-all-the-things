import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import SideNav from '../components/SideNav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Header />
        <div className="side-scroll">
          <SideNav sticky={this.state.stickyNav} />
          <main id="main">
            <section className="main" />
            <section className="main special" />
          </main>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
