import React from "react";
import { NavLink } from "react-router-dom";
// import FriendsAction from "../components/FriendsAction";
import 'semantic-ui-css/semantic.min.css'
import { Header,Group, Icon, Image, Menu, Segment, Sidebar, Button,Card} from 'semantic-ui-react'
import Friends from "../components/Friends";
import "semantic-ui-css/semantic.min.css"
import "./FriendsPage.css"
import TopMenu from "../components/TopMenu"
import {Input, Search,Breadcrumb} from "antd"
import UserCard from "../components/UserCard";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
class FriendsPage extends React.Component {
  
  render() {
    const { Search } = Input;
    return (
      <>
   <TopMenu className='TopMenu'/>
   <Search className='searchbar'
   placeholder="Search Gamers"
   onSearch={value => console.log(value)}
   style={{ width: 200 }}
 />
 <UserCard className='usercardFP'/>       
        <Friends />
        <Menu>Gamer Requests</Menu>
        <Card.Group className='cardgroup' style={ {
          padding:"10px",
          display: "flex",
          justifyContent: "space-evenly"
        } }>
          <Breadcrumb>
            <Breadcrumb.Item>Gamers</Breadcrumb.Item>
            <a href=" ">Notifications</a>
          </Breadcrumb>
      <Card style={{ border: "10px double black",
        borderRadius: "10px"}}>
        <Card.Content>
          <Image className='userimg' style={{ border: "1.5px solid black",
          borderRadius: "10px", marginTop: "20px",}}
            floated='center'
            size='small'
            src='https://www.hellomagazine.com/imagenes/travel/2018012645793/tom-myspace-founder-travel-photographer/0-230-700/myspace-tom-now-t.jpg?filter=w600&interpolation=lanczos-normal&downsize=0.75xw:*&output-format=progressive-jpeg&output-quality=70'
          />
              <Card.Header style={{ color: "white" }}>TOM</Card.Header>
          <Card.Meta>90% Gamer Match</Card.Meta>
          <Card.Description>
         Tom wants to play Fortnite!
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
      <Card style={{ border: "10px double black",
      borderRadius: "10px"}}>
        <Card.Content>
          <Image className="userimg" style={{border: "1.5px solid black",
          borderRadius: "10px", marginTop: "20px",}}
            floated='center'
            size='small'
            src='https://i.imgur.com/aiiJMqI.png'
          />
          <Card.Header style={{ color: "white" }}>TayTay</Card.Header>
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
      <Card style={{ border: "10px double black",
      borderRadius: "10px"}}>
        <Card.Content>
          <Image style={{ border: "1.5px solid black",
          borderRadius: "10px", marginTop: "20px",}}
            floated='center'
            size='small'
            src='https://previews.123rf.com/images/kahovsky/kahovsky1709/kahovsky170900052/85504132-cheerful-happy-boy-young-man-hold-joystick-plays-video-game-in-vr-glasses-vector-flat-modern-style-i.jpg'
          />
              <Card.Header style={ {
                color: "white",
             } }>Mauricio</Card.Header>
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
    );
  }
}

export default FriendsPage;
