import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Col, Row } from "react-bootstrap"
import Listings from "../layout/listings"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div className={"flex-wrapper  mt-5"}>
        <Row>
          <div className={"row"}>
            <Col xs={3} md={3} lg={3} xl={3}>
              <div>
                <Listings firstListName={"popular"} secondListName={"extras"} />
              </div>
            </Col>
            <Col xs={9} md={9} lg={9} xl={9}>
              <div className={"container"}>
                <h1 className="mb-3 text-center">Most Recent</h1>
                <ol style={{ listStyle: `none` }}>
                  {posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    return (
                      <li key={post.fields.slug}>
                        <article
                          className="post-list-item small"
                          itemScope
                          itemType="http://schema.org/Article"
                        >
                          <header>
                            <h5>
                              <Link
                                to={post.fields.slug}
                                itemProp="url"
                                className="n-link"
                              >
                                <span itemProp="headline">{title}</span>
                              </Link>
                            </h5>
                            <small className="text-secondary fst-italic">
                              {post.frontmatter.date}
                            </small>
                          </header>
                          <section>
                            <p
                              dangerouslySetInnerHTML={{
                                __html:
                                  post.frontmatter.description || post.excerpt,
                              }}
                              itemProp="description"
                            />
                          </section>
                        </article>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
