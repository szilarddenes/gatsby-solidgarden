import * as React from "react"
import {Link} from "gatsby"
import {SEO, Layout, Footer, GlobalStyles, Toggle} from "components"

export default function Home(props) {
  return (
    <>
    {/* <Seo title="solidgarden" /> */}
    <Layout>
      {/* <SEO title="solidgarden" /> */}
      <h1>Welcome to Solidgarden</h1>
      <ul>
        <li>
          <Link to="/dsg">DSG page</Link>
        </li>
        <li>
          <Link to="/ssr">SSR page</Link>
        </li>
      </ul>
      </Layout>
    </>
  )
}
