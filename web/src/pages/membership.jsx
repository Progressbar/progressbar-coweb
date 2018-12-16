import React, { Component } from "react";
import Helmet from "react-helmet";
import LandingPageLayout from "../layouts/LandingPageLayout";
import config from "../../data/SiteConfig";

class MembershipPage extends Component {
  render() {
    return (
      <LandingPageLayout>
        <div className="membership-container">
          <Helmet title={`Membership | ${config.siteTitle}`} />
        </div>
      </LandingPageLayout>
    );
  }
}

export default MembershipPage;
