import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layouts/LandingPageLayout";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
