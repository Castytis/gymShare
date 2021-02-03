import React from 'react';
import {Segment, Comment, Header, Form, Button} from 'semantic-ui-react';

export default function EventDetailedChat() {
    return (
        <>
<Segment
    textAlign="center"
    attached="top"
    inverted
    color="orange"
    style={{border: 'none'}}
>
    <Header>Treniruotės komentarai</Header>
</Segment>
<Segment attached>
    <Comment.Group>
        <Comment>
            <Comment.Avatar src="/assets/user.png"/>
            <Comment.Content>
                <Comment.Author as="a">Kastytis</Comment.Author>
                <Comment.Metadata>
                    <div>Šiandien 8:42</div>
                </Comment.Metadata>
                <Comment.Text>Puiki treniruotė</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Atsakyti</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>

        <Comment>
            <Comment.Avatar src="/assets/user.png"/>
            <Comment.Content>
                <Comment.Author as="a">Salvinija</Comment.Author>
                <Comment.Metadata>
                    <div>Vakar 12:30</div>
                </Comment.Metadata>
                <Comment.Text>
                    <p>
                        Puiki treniruotė pradedančiajam
                    </p>
                </Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Atsakyti</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
                <Comment>
                    <Comment.Avatar src="/assets/user.png"/>
                    <Comment.Content>
                        <Comment.Author as="a">Marius</Comment.Author>
                        <Comment.Metadata>
                            <div>Vakar 20:20</div>
                        </Comment.Metadata>
                        <Comment.Text>10/10</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Atsakyti</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
            <Comment.Group>
                <Comment>
                    <Comment.Avatar src="/assets/user.png"/>
                    <Comment.Content>
                        <Comment.Author as="a">Marius</Comment.Author>
                        <Comment.Metadata>
                            <div>Vakar 22:40</div>
                        </Comment.Metadata>
                        <Comment.Text> Labai gerai </Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Atsakyti</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </Comment>

        <Comment>
            <Comment.Avatar src="/assets/user.png"/>
            <Comment.Content>
                <Comment.Author as="a">Urtė</Comment.Author>
                <Comment.Metadata>
                    <div>Ka tik</div>
                </Comment.Metadata>
                <Comment.Text>Ar tinka apšilimui?</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Atsakyti</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>

        <Form reply>
            <Form.TextArea/>
            <Button
                content="Palykti komentarą"
                labelPosition="left"
                icon="edit"
                color='orange'
            />
        </Form>
    </Comment.Group>
</Segment>
</>

    )
}