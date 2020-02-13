import React, { Fragment } from "react"
import { Link } from "gatsby"
import Bio from "./bio"
import { rhythm, scale } from "../utils/typography"
import layoutStyles from './layout.module.css';

import { config } from '@fortawesome/fontawesome-svg-core' 
config.autoAddCss = false

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 style={{marginTop: 0}}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <Fragment>
      <header className={layoutStyles.heroSplash}>
        {/* {header} */}
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(35),
            paddingLeft: `${rhythm(3 / 4)}`,
            paddingRight: `${rhythm(3 / 4)}`,
            position: `relative`,
            top: rhythm(1),
            zIndex: 100
          }}
        >
          <Bio />
        </div>
        <ul className={layoutStyles.bgBubbles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </header>
      <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(35),
            padding: `${rhythm(.5)} ${rhythm(3 / 4)}`,
            minHeight: `calc(100vh - ${rhythm(17)})`
          }}
      >
        <main>{children}</main>
      </div>
      <footer style={{
        padding: `${rhythm(3.3)}`,
        backgroundColor: '#F5F2F0'
      }}>
          © {new Date().getFullYear()} Built with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
          {` `}
          by <Link to={`/`} style={{color: '#000000'}}><strong>{title}</strong></Link>
          {` `}
          in &#128205; Denver, Colorado
      </footer>
    </Fragment>
  )
}

export default Layout
