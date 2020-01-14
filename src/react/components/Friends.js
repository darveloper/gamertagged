import React from "react";
import "./Friends.css"
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, Image, Menu, Segment, Sidebar, Button, Card } from 'semantic-ui-react'
class Friends extends React.Component {
  render () {
 
    return (
      <>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='/images/avatar/large/steve.jpg'
              />
              <Card.Header>Dan The Man</Card.Header>
              <Card.Meta>90% Gamer Match</Card.Meta>
              <Card.Description>
              Dan wants to play Fortnite! 
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                 Accept
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='/images/avatar/large/molly.png'
              />
              <Card.Header>TayTay</Card.Header>
              <Card.Meta>New Gamer</Card.Meta>
              <Card.Description>
                Send <strong>TayTay</strong> a request for questionnaire ?
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                Send Request
                </Button>
                <Button basic color='red'>
                 Ignore New Gamer 
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='/images/avatar/large/jenny.jpg'
              />
              <Card.Header>Mauricio</Card.Header>
              <Card.Meta>Online!</Card.Meta>
              <Card.Description>
              Sent a request for questionnaire!
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Answer
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </>
    )
  }
}
export default Friends;