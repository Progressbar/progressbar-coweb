import React, { Component } from "react";
import { Icon, Menu, Responsive, Sidebar } from "semantic-ui-react";
import { Link } from "gatsby";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpened: false,
      activeItem: ""
    };
  }


  toggleMenuButton = () => {
    const { isMenuOpened } = this.state;
    this.setState({ isMenuOpened: !isMenuOpened });
  };

  handleOnUpdate = (event, data) => {
    if (!this.state.isMenuOpened && data.maxWidth < data.width) {
      this.setState({ isMenuOpened: true });
    }
  };

  handleItemClick = (e, { id }) => this.setState({ activeItem: id });

  render() {
    return (
      <div>
        <div className='heading'/>
        <Sidebar
          as={Menu}
          direction='top'
          inverted
          borderless
          stackable
          visible
        >
          <Menu.Item as='div' className='head-title'>
            <div as='h1' to='/home' href='/home'>
              ProgressBar
            </div>
            <Responsive
              as={Icon}
              inverted
              name='bars'
              maxWidth={767}
              fireOnMount
              onClick={this.toggleMenuButton}
              onUpdate={this.handleOnUpdate}
            />
          </Menu.Item>
          <div
            className={
              this.state.isMenuOpened ? "wrapper" : "wrapper closed"
            }
          >
            <Menu.Item
              id='about'
              as={Link}
              name='about'
              to='/about/'
              activeStyle={{
                color: "#00B29A"
              }}
              // onClick={this.handleItemClick}
              // active={activeItem === "matches"}
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
          </div>
        </Sidebar>
      </div>
    );
  }
}

export default Header;