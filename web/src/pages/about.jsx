import React, { Component } from "react";
import Helmet from "react-helmet";
import LandingPageLayout from "../layouts/LandingPageLayout";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <LandingPageLayout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
        </div>
      </LandingPageLayout>
    );
  }
}

export default AboutPage;
