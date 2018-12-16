import React, { Component } from "react";
import Helmet from "react-helmet";
import LandingPageLayout from "../layouts/LandingPageLayout";
import config from "../../data/SiteConfig";

class EventsPage extends Component {
  render() {
    return (
      <LandingPageLayout>
        <div className="events-container">
          <Helmet title={`Events | ${config.siteTitle}`} />
        </div>
      </LandingPageLayout>
    );
  }
}

export default EventsPage;
