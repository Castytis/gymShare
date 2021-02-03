import React, { useState } from 'react';
import {Segment, Grid, Icon, Button} from 'semantic-ui-react';
import {format} from 'date-fns';
import EventDetailedMap from './EventDetailedMap';

export default function EventDetailedInfo({event}) {
    const [mapOpen, setMapOpenToggle] = useState(false);
    return (
        <Segment.Group>
        <Segment attached="top">
            <Grid>
                <Grid.Column width={1}>
                    <Icon size="large" color="orange" name="bolt"/>
                </Grid.Column>
                <Grid.Column width={15}>
                    <p>{event.description}</p>
                </Grid.Column>
            </Grid>
        </Segment>
        <Segment attached>
            <Grid verticalAlign="middle">
                <Grid.Column width={1}>
                    <Icon name="crosshairs" size="large" color="orange"/>
                </Grid.Column>
                <Grid.Column width={15}>
                    <span>{event.time}</span>
                </Grid.Column>
            </Grid>
        </Segment>
        <Segment attached>
            <Grid verticalAlign="middle">
                <Grid.Column width={1}>
                    <Icon name="heart outline" size="large" color="orange"/>
                </Grid.Column>
                <Grid.Column width={15}>
                    <span>{event.additional}</span>
                </Grid.Column>
            </Grid>
        </Segment>
    </Segment.Group>
    
    )
}