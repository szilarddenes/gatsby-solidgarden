import React, { useContext } from "react"
import { ThemeContext } from 'hooks/ThemeProvider';

import {Link} from "gatsby"
import {SEO, Layout, Footer, GlobalStyles, ToggleTheme} from "components"

export default function Home(props) {
  const { theme } = useContext(ThemeContext)
  return (
    <>
    {/* <Seo title="solidgarden" /> */}
    <Layout>
      {/* <SEO title="solidgarden" /> */}
      <h1>Welcome to Solidgarden</h1>
      <ToggleTheme />
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
