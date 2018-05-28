import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const SideNav = props => (
  <nav id="side-nav">
    <div className="sticky">
      <Scrollspy
        items={[
          'rest-spread-properties',
          'asynchronous-iteration',
          'promise-prototype-finally',
          'string-prototype-padStart-padEnd',
        ]}
        currentClassName="is-active"
      >
        <li>
          <Scroll type="id" element="rest-spread-properties">
            <a href="#">Rest/Spread Properties</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="asynchronous-iteration">
            <a href="#">Asynchronous Iteration</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="promise-prototype-finally">
            <a href="#">Promise.prototype.finally</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="string-prototype-padStart-padEnd">
            <a href="#">String.prototype.padStart/padEnd</a>
          </Scroll>
        </li>
      </Scrollspy>
    </div>
  </nav>
)

export default SideNav
