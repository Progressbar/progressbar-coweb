import React, { Component } from "react";
import Cookies from "js-cookie"
import {
  Button,
} from "semantic-ui-react";

class JoinUs extends Component {
  constructor(props) {
    super()
    this.props = {
      fixed: props.fixed || false
    }
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js";
    script['data-dojo-config'] = { usePlainJson: true, isDebug: false }
    script.async = true;
    document.body.appendChild(script);
  }

  openJoinUs = () => {
    if (Cookies.get('MCPopupClosed') === 'yes') {
      Cookies.remove('MCPopupClosed')
    }
    if (Cookies.get('MCPopupSubscribed') === 'yes') {
      // TODO: add already subscribed message
    }
    window.dojoRequire(
      ["mojo/signup-forms/Loader"],
      (L) => { 
        L.start({ "baseUrl": "mc.us7.list-manage.com", "uuid": "316670e4897e96991fc292bb5", "lid": "050bde9cc1", "uniqueMethods": true }) 
      }
    )
  }

  render() {
    const { fixed } = this.props

    return (
      <Button 
        as="a"
        inverted={!fixed}
        primary={fixed}
        style={{ marginLeft: "0.5em" }}
        onClick={this.openJoinUs}
      >
        Join us
        <span role="img" aria-label="heart"> ❤️</span>
      </Button>
    )
  }
}

export default JoinUs;
