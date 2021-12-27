/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  FaEnvelope,
  FaFacebookSquare,
  FaLinkedinIn,
  FaTwitter,
  faTwitter,
} from "react-icons/fa"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["auto", "webp"]}
              src="../images/my_pic.png"
              width={150}
              height={150}
              quality={95}
              alt="Profile picture"
            />
            <div className="mx-2">
              <br />
              <a href="https://www.twitter.com/tbetcha">
                <FaTwitter />
              </a>
              <br />
              <a href="https://www.linkedin.com/in/troy-boettger-89467185/">
                <FaLinkedinIn />
              </a>
              <br />
              <FaEnvelope />
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title mb-5 n-link">About Me</h3>
              <p class="card-text mb-4">
                Welcome to my page, I'm Troy. This is all about my journey into
                functional programming. When I started to learn to write
                software following a functional paradigm I quickly learned there
                weren't as many resources as there were for other paradigms. I
                found a lot of user guides but wanted something that showed me
                how to think functionally as well as how to handle things that
                came up in everyday professional situations. I decided to make
                this to document my findings for others to read and of course to
                help me learn more by forcing me to write my thoughts down in a
                cohesive manner.
                <br />
                <br />
                Before entering the world of functional programming I wrote a
                lot of JavaScript and TypeScript using frameworks like React and
                Vue, and also did some Python, Java and Go. I'm currently still
                using React and Vue at work but all the backend code I touch is
                in F#. At work I am on a team dedicated to Microsoft and F#.
                Along the way I've developed a strong interest in category
                theory as well.
                <br />
                <br />
                If you want to get in touch with me, follow the links on the
                right.
              </p>
              <p class="card-text">
                <small class="text-secondary">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* {author?.name && (
        <p>
          Hi, I'm{" "}
          <a href="http://www.twitter.com/tbetcha" className="text-dark">
            <strong>{author.name}</strong>
          </a>{" "}
          {author?.summary || null}
          {` `}
          <br />
        </p>
      )} */}
    </div>
  )
}

export default Bio
