import React, { Component } from 'react'
import Helmet from "react-helmet";

import DesktopContainer from '../components/DesktopContainer'
import MobileContainer from '../components/MobileContainer'
import Footer from '../components/Footer'
import config from "../../data/SiteConfig";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

class LandingPageLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <ResponsiveContainer>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
        <Footer />
      </ResponsiveContainer>
    )
  }
}

export default LandingPageLayout