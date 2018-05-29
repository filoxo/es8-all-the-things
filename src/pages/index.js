import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import SideNav from '../components/SideNav'

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
            <section id="object-entries" className="main">
              <h2>Object.entries</h2>
              <p>
                <code>Object.entries</code> returns an array of a given object's
                own enumerable properties as <code>[key, value]</code> pairs, in
                the same order as that provided by a <code>for...in</code> loop.
              </p>
              <pre>
                <code
                >{`Object.entries({ 'a': 'A', 'b': 'B' }); // [["a","A"],["b","B"]]`}</code>
              </pre>
            </section>
            <section id="object-values" className="main">
              <h2>Object.values</h2>
              <p>
                <code>Object.values</code> returns an array of a given object's
                own enumerable property values, in the same order as that
                provided by a <code>for...in</code> loop.
              </p>
              <pre>
                <code>{`// Object literal
Object.values({ 'a': 23, 'b': 19 }) // [23, 19]

// Array-like object (order not preserved)
Object.values({ 80: 'eighty', 0: 1, 1: 'yes' }) // [1, 'yes', 'eighty']`}</code>
              </pre>
            </section>
            <section id="array-prototype-includes" className="main">
              <h2>Array.prototype.includes</h2>
              <p>
                <code>includes()</code> determines whether an array includes a
                certain element, returning true or false as appropriate.
              </p>
              <pre>
                <code
                >{`['a', 'b', 'c'].includes('a') // true, not 0 like indexOf would give
['a', 'b', 'c'].includes('d') // false`}</code>
              </pre>
            </section>
            <section id="exponentiation" className="main">
              <h2>Exponentiation</h2>
              <p>
                The exponentiation operator is a shorthand method for the{' '}
                <code>Math.pow</code> function, allowing for a more succinct
                infix notation.
              </p>
              <pre>
                <code>{`// 2 to the power of 8
Math.pow(2, 8) // 256

// ..becomes
2 ** 8 // 256

let value = 5;
value **= 2;
// value: 25`}</code>
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
