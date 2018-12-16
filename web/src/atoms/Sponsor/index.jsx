import React, { Fragment } from "react";
import { Image } from 'semantic-ui-react'

const Sponsor = ({ name, url, icon = null, text, showText = false }) => (
  <Fragment>
    <Image
      as="a"
      src={icon}
      href={url}
      target="_blank"
    />
  </Fragment>
);

export default Sponsor;
