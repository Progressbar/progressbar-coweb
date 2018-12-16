import React, { Component } from 'react';
import {
  Button,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import LandingHero from '../LandingHero';
import { Link } from "gatsby";
import pbLogoWhite from "../../../static/logos/pb-logo-white.svg";
import "./Header.css";

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
                <img src={pbLogoWhite} alt="pb-logo"/>
              </Menu.Item>
              <Menu.Item
                id='about'
                as={Link}
                name='about'
                to='/about/'
                activeStyle={{
                  color: "#00B29A !important"
                }}
                onClick={this.handleItemClick}
                active={activeItem === "about"}
              />
              <Menu.Item
                id='events'
                as={Link}
                name='events'
                to='/events/'
                activeStyle={{
                  color: "#EE4D7A"
                }}
                // onClick={this.handleItemClick}
                // active={activeItem === "matches"}
              />
              <Menu.Item
                id='membership'
                as={Link}
                name='membership'
                to='/membership/'
                activeStyle={{
                  color: "#A065AA"
                }}
                // onClick={this.handleItemClick}
                // active={activeItem === "matches"}
              />
              <Menu.Item
                id='sponsors'
                as={Link}
                name='sponsors'
                to='/sponsors'
                activeStyle={{
                  color: "#6ABB81"
                }}
                // onClick={this.handleItemClick}
                // active={activeItem === "matches"}
              />
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
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
