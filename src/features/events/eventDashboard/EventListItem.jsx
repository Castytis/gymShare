import React from 'react';
import { Segment, Item, Icon, List, Button, Label } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';
import {format} from 'date-fns';
import { deleteEventInFirestore } from '../../../app/firestore/firestoreService';

export default function EventListItem({ event}) {

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Sukurta <Link to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link> </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment >
        <span>
          <Icon name='clock' /> {format(event.date, 'MMMM d, yyyy h:mm a')}
        </span>
      </Segment>
      <Segment secondary>
        <span>
        <Icon name='bolt' /> {event.category}
        </span>
      </Segment>
      <Segment >
        <span>
          <Icon name='crosshairs' /> {event.time}
        </span>
      </Segment>
      <Segment secondary>
        <span>
          <Icon name='heart outline' /> {event.additional}
        </span>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        {/* <Button
          onClick={() => deleteEventInFirestore(event.id)}
          color='red'
          floated='right'
          content='Ištrinti'
        /> */}
        <Button
          as={Link} to={`/events/${event.id}`}
          color='orange'
          floated='right'
          content='Peržiūrėti'
        />
      </Segment>
    </Segment.Group>
  );
}
