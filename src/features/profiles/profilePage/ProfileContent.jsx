import React from 'react';
import { Tab } from 'semantic-ui-react';
import AboutTab from './AboutTab';
import EventsTab from './EventsTab';

export default function ProfileContent({profile, isCurrentUser}) {
    const panes = [
        {menuItem: 'Apie mane', render: () => <AboutTab profile={profile} isCurrentUser={isCurrentUser} />},
        {menuItem: 'Treniruotės', render: () => <EventsTab profile={profile} />},
    ]

    return (
        <Tab 
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
        />
    )
}