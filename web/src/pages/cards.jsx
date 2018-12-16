import React, { Component } from "react";
import Helmet from "react-helmet";
import InfoCards from "../components/LandingPage/InfoCards";
import Layout from "../layouts/LandingPageLayout";
import config from "../../data/SiteConfig";

class CardsPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <InfoCards />
      </Layout>
    );
  }
}

export default CardsPage;