import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import './InfoCards.css'

const InfoCards = () => (
  <div className="card-container">
    <Card className="info-card">
      <img className="info-card__image" alt="EventImage" src='../images/event_2.jpg' size="medium" />
      <Card.Content className="info-card__content">
        <Card.Header className="info-card__header">Events</Card.Header>
        <Card.Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio accusamus veritatis, ab ducimus hic quam ex perferendis at maiores repellat.</Card.Description>
      </Card.Content>
      <Button inverted color='teal'>
        Visit Next One
      </Button>
    </Card>
    <Card className="info-card">
      <img className="info-card__image" alt="MeetingRoom" src='../images/meeting_room_3.jpg' size="medium" />
      <Card.Content>
        <Card.Header className="info-card__header">Meeting Room</Card.Header>
        <Card.Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio accusamus veritatis, ab ducimus hic quam ex perferendis at maiores repellat.</Card.Description>
      </Card.Content>
      <Button inverted color='red'>
        Book Now
      </Button>
    </Card>
    <Card className="info-card">
      <img className="info-card__image" alt="Cowork" src='../images/cowork_1.jpg' />
      <Card.Content>
        <Card.Header className="info-card__header">Cowork</Card.Header>
        <Card.Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio accusamus veritatis, ab ducimus hic quam ex perferendis at maiores repellat.</Card.Description>
      </Card.Content>
      <Button inverted color='violet'>
        Join Our Space
      </Button>
    </Card>
  </div>
);

export default InfoCards;