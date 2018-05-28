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
          <SideNav />
          <main id="main">
            <section className="main" id="rest-spread-properties">
              <h2>Rest/Spread Properties</h2>
              <p>
                When destructuring, Rest/Spread Properties allow you to collect
                the remaining properties of an object into a new object.
              </p>
              <pre>
                <code>{`let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }`}</code>
              </pre>
            </section>
            <section className="main" id="asynchronous-iteration">
              <h2>Asynchronous Iteration</h2>
              <p>
                With Asynchronous Iteration we get asynchronous iterators and
                asynchronous iterables. Asynchronous iterators just like regular
                iterators, except their next() method returns a promise for a{' '}
                <code>{`{ value, done }`}</code> pair. To consume asynchronous
                iterables, we can now use the await keyword with{' '}
                <code>for … of</code> loops.
              </p>
              <pre>
                <code>{`for await (const line of readLines(filePath)) {
  console.log(line);
}`}</code>
              </pre>
            </section>
            <section className="main" id="promise-prototype-finally">
              <h2>Promise.prototype.finally()</h2>
              <p>
                Promise.prototype.finally() finalizes the whole promises
                implementation, allowing you to register a callback to be
                invoked when a promise is settled (either fulfilled, or
                rejected).
              </p>
              <pre>
                <code>{`fetch('/api')
  .then(result => { /* ... */ })
  .catch(error => { /* ... */ })
  .finally(() =>{
    // Called after then or catch
  })
`}</code>
              </pre>
            </section>
            <section className="main" id="string-prototype-padStart-padEnd">
              <h2>String.prototype.padStart/padEnd</h2>
              <p>
                <code>padStart</code> and <code>padEnd</code> allow us to pad a
                given string with any text of our choosing to ensure a string
                matches a given length.
              </p>
              <pre>
                <code>{`'42'.padStart(8, '0') // '00000042'
'42'.padEnd(8, '0')   // '42000000'`}</code>
              </pre>
            </section>
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
