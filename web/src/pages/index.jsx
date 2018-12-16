import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle}/>
          <SEO/>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */