/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import Image from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div style={{paddingBottom: rhythm(2.4), zIndex: 2}}>
      <Link to={`/`}><h1 style={{color: `white`, display: `inline-block`}}>{author}</h1></Link>
      <p><FontAwesomeIcon style={{color: 'hotpink'}} icon={faCodeBranch} size="lg" />&nbsp;&nbsp;Web &amp; Mobile JS Developer</p>
    </div>
  )
}

export default Bio
