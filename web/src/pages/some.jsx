import React, { Component } from "react";
import Helmet from "react-helmet";
import InfoCards from "../components/LandingPage/InfoCards";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class SomePage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <InfoCards />
      </Layout>
    );
  }
}

export default SomePage;