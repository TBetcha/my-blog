import { StaticImage } from "gatsby-plugin-image"
import { Container, Navbar, Nav } from "react-bootstrap"
import React from "react"
import "../style.css"
import { PageProps } from "gatsby"

const NavHeader = ({ siteTitle }) => {
  return (
    <Navbar
      className="fw-light"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex justify-content-vertical">
          <div className="pr-2">
            <StaticImage
              src="../images/lambda_rainbow.png"
              formats={["auto", "webp"]}
              layout="fixed"
              width={50}
              height={50}
              quality={95}
              alt="nav picture"
            />{" "}
          </div>
          <div className="pt-2">
            <h2> {siteTitle}</h2>
          </div>
        </Navbar.Brand>
        <Navbar className="justify-content-end">
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/">Posts</Nav.Link>
            {/* <Nav.Link eventKey={3} href="#memes">
              Contact
            </Nav.Link> */}
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  )
}

export default NavHeader
