import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import IgFeed from "../components/IgFeed/IgFeed";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <IgFeed />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
