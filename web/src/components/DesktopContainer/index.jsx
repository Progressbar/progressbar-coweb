import React, { Component } from 'react';
import {
  Button,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Image
} from "semantic-ui-react";
import { Link } from "gatsby";
import LandingHero from '../LandingHero';
import pbLogoWhite from "../../../static/logos/pb-logo-white.svg";
import "./Header.css";
import config from "../../../data/SiteConfig";
import JoinUs from '../JoinUs/JoinUs';
import 'semantic-ui-css/semantic.min.css';

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {
    activeItem: ""
  };

  handleItemClick = (e, { id }) => this.setState({ activeItem: id });

  hideFixedMenu = () => this.setState({ fixed: false });

  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed, activeItem } = this.state;
    const { navbarLinks } = config;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              padding: 0
            }}
            vertical
          >

            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Menu.Item id='logo'>
                <Image as={Link} to="/" src={pbLogoWhite} alt="pb-logo" />
              </Menu.Item>
              {navbarLinks.map(({ to, name }) => (
                <Menu.Item
                  id={name}
                  as={Link}
                  name={name}
                  to={to}
                  activeStyle={{
                    color: "#00B29A !important"
                  }}
                  onClick={this.handleItemClick}
                  active={activeItem === name}
                />
              ))}
              <Menu.Item position="right">
                <JoinUs fixed={fixed} />
              </Menu.Item>
            </Menu>
            <LandingHero />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;
