import React from 'react';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

export default function HomePage({history}) {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    GymShare
                </Header>
                <Button onClick={() => history.push('/events')} size='huge' inverted>
                    Pradėk dabar!
                </Button>
            </Container>
        </Segment>
    )
}