import * as React from "react"
import NavHeader from "../layout/navHeader"
import Listings from "../layout/listings"

import { Col, Row } from "react-bootstrap"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <NavHeader siteTitle={"CODE WITH TROY"} />
      </header>
      <div className={"flex-wrapper"}>
        <Row>
          <div className={"row"}>
            <Col xs={3} md={3} lg={3} xl={3}>
              <div className={"col sm-4 lg-3 md-3"}>
                <Listings
                  firstListName={"ALL POSTS"}
                  secondListName={"EXTRAS"}
                />
              </div>
            </Col>
            <Col xs={9} md={9} lg={9} xl={9}>
              <div className={"col sm-8 md-9 lg-9"}>
                <main>{children}</main>
              </div>
            </Col>
          </div>
        </Row>
        <footer className="text-center">
          © {new Date().getFullYear()} {` `} Troy Boettger
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Layout
