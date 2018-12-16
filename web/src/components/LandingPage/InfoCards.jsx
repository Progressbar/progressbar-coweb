import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { navigateTo } from 'gatsby-link';
import './InfoCards.css'

class InfoCards extends Component  {
  navigateEvents() {
    navigateTo('/cards');
  }
  navigateMeeting() {
    navigateTo('/cards');
  }
  navigateCowork() {
    navigateTo('/cards');
  }
  render () {
    return (
      <div className="card-container">
        <Card className="info-card">
          <img className="info-card__image" alt="EventImage" src='../images/event_2.jpg' />
          <Card.Content className="info-card__content">
            <Card.Header className="info-card__header"> <h1> Events </h1> </Card.Header>
            <Card.Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio accusamus veritatis, ab ducimus hic quam ex perferendis at maiores repellat.</Card.Description>
          </Card.Content>
          <Button onClick={this.navigateEvents} color='blue'>
            <p className="button-text">Visit Next One</p>
          </Button>
        </Card>
        <Card className="info-card">
          <img className="info-card__image" alt="MeetingRoom" src='../images/meeting_room_3.jpg' />
          <Card.Content>
            <Card.Header className="info-card__header"> <h1>Meeting Room</h1></Card.Header>
            <Card.Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio accusamus veritatis, ab ducimus hic quam ex perferendis at maiores repellat.</Card.Description>
          </Card.Content>
          <Button onClick={this.navigateMeeting} color='red'>
            <p className="button-text">Book Now</p> 
          </Button>
        </Card>
        <Card className="info-card">
          <img className="info-card__image" alt="Cowork" src='../images/cowork_1.jpg' />
          <Card.Content>
            <Card.Header className="info-card__header"> <h1>Cowork</h1></Card.Header>
            <Card.Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio accusamus veritatis, ab ducimus hic quam ex perferendis at maiores repellat.</Card.Description>
          </Card.Content>
          <Button onClick={this.navigateCowork} color='pink'>
            <p className="button-text">Join Our Space</p>
          </Button>
        </Card>
    </div>
    )
  }
};

export default InfoCards;