import { useStaticQuery, Link, graphql } from "gatsby"
import React from "react"
import { Container, ListGroup, ListGroupItem } from "react-bootstrap"
import Card from "react-bootstrap/esm/Card"

const Listings = ({ firstListName, secondListName }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.nodes
  return (
    <Container>
      <Card
        style={{ width: "14rem" }}
        className={"mt-5 ml-2 bg-dark text-white"}
      >
        <Card.Header className="ml-4 post-list text-center" as="h5">
          {firstListName}
        </Card.Header>
        <ListGroup className="ml-2" variant="flush">
          {posts.map(post => {
            return (
              <ListGroupItem action variant="light">
                <li
                  className={"post-list-items mx-4"}
                  key={post.frontmatter.title}
                >
                  <h6 className="ml-2 mx-1">
                    <Link
                      className="n-link"
                      to={post.fields.slug}
                      itemProp="url"
                    >
                      <span itemProp="headline">{post.frontmatter.title}</span>
                    </Link>
                  </h6>
                </li>
              </ListGroupItem>
            )
          })}
        </ListGroup>
        <Card.Header className="ml-4 post-list text-center" as="h5">
          {secondListName}
        </Card.Header>
        <ListGroup className="ml-2" variant="flush">
          {posts.map(post => {
            return (
              <ListGroupItem action variant="light">
                <li
                  className={"post-list-items mx-4"}
                  key={post.frontmatter.title}
                >
                  <h6 className="ml-2 mx-1">
                    <Link
                      className="n-link"
                      to={post.fields.slug}
                      itemProp="url"
                    >
                      <span itemProp="headline">{post.frontmatter.title}</span>
                    </Link>
                  </h6>
                </li>
              </ListGroupItem>
            )
          })}
        </ListGroup>
        <Card.Body>{""}</Card.Body>
      </Card>
    </Container>
  )
}

export default Listings
