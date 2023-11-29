
import './App.css';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

/* class app */
class App extends React.Component {
  constructor(props){
    super(props);
    /* state person */
    this.state ={
      person :{
        fullname: 'Bill Gates',
        bio : 'born in October 28, 1955 Seattle, Washington, U.S. ',
        img :"/im.jpeg",
        profession :' Gates is an American businessman, investor, philanthropist, and writer best known for co-founding the software giant Microsoft',
        show: false,
    },
    countshow: 0,
    }
    this.timer = null;
  }
  /* Lifecycle method componentDidMount and Function to update the TimeElapsed state */
    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({
          countshow: prevState.countshow + 1,
        }));
      }, 1000);
    }

 /* Lifecycle method componentWillUnmount  */
    componentWillUnmount() {
      clearInterval(this.timer);
    }

  /* function show for button to appear the state person */
  Show =() => {
      this.setState({show: !this.state.show});
  }
   /* the methode render for this class */
  render() {
    return (
      /* the card that will appear  */
      <div class="card-container">
        {this.state.show && <Card style={{ width: '100%' }}>
      <Card.Img src={this.state.person.img} style={{ width: '100%',height:'100%' }} class="round" />
      <Card.Body>
        <Card.Title >{this.state.person.fullname}</Card.Title>
        <Card.Text>
        {this.state.person.bio}
        </Card.Text>
        <Card.Text>
        {this.state.person.profession}
        </Card.Text>
      </Card.Body>
      <p style={{ fontWeight:'bold',fontStyle:'italic'}}>Time : {this.state.countshow} seconds</p>
    </Card>}
    
    <button onClick={this.Show} class="button"> SHOW </button>
      </div>
    )
  }
}
export default App ;

