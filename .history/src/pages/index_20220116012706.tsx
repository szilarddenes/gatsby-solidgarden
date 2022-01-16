import * as React from 'react'
import { Link } from 'gatsby'
import {SEO, L} from 'components'

export default function Home (props) {
  return (
    <>
      <h1>Welcome to Solidgarden</h1>
      <ul>
        <li>
          <Link to='/dsg'>DSG page</Link>
        </li>
        <li>
          <Link to='/ssr'>SSR page</Link>
        </li>
      </ul>
    </>
  )
}
