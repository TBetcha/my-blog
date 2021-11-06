import * as React from "react"
import NavHeader from "../layout/navHeader"
import Listings from "../layout/listings"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <NavHeader siteTitle={"CODE WITH TROY"} />
      </header>
      <div className={"flex-wrapper"}>
        <main>{children}</main>
        <footer className="text-center">
          © {new Date().getFullYear()} {` `} Troy Boettger
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Layout
