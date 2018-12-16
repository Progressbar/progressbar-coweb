import React, { Component } from "react";
import Helmet from "react-helmet";
import LandingPageLayout from "../layouts/LandingPageLayout";
import config from "../../data/SiteConfig";

class SponsorsPage extends Component {
  render() {
    return (
      <LandingPageLayout>
        <div className="sponsors-container">
          <Helmet title={`Sponsors | ${config.siteTitle}`} />
        </div>
      </LandingPageLayout>
    );
  }
}

export default SponsorsPage;
