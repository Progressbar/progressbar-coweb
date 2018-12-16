import React, { Component } from "react";
import { Container, Segment, List, Header, Grid } from "semantic-ui-react";
import { Link } from "gatsby";

import config from "../../../data/SiteConfig";

class Footer extends Component {
  render() {
    const { address, contacts } = config

    return (
      <Segment inverted vertical style={{ padding: "4em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Cowork." />
                <List link inverted>
                  <List.Item as="a">Plans</List.Item>
                  <List.Item as="a">Community</List.Item>
                  <List.Item as="a">Events</List.Item>
                  <List.Item as="a">Membership</List.Item>
                  <List.Item as="a">Rent our space</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Hackerspace." />
                <List link inverted>
                  <List.Item as="a">What do we add here</List.Item>
                  <List.Item as="a">Some history i guess</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Talk to us." />
                <List link inverted>
                  {contacts.map(({ title, url }) => (
                    <List.Item as="a" href={url} target="_blank">{title}</List.Item>
                  ))}
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" inverted>
                  Find us.
                </Header>
                <address>
                  {address.street}
                  <br />
                  {address.pobox}
                  <br />
                  {address.city}
                  <br />
                  {address.country}
                </address>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
