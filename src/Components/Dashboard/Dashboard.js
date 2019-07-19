import React, { Component } from "react";
import {Link} from 'react-router-dom';
import House from "../House/House"
// import Wizard from "../Wizard/Wizard";
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }

  componentDidMount(){
    axios.get('/api/houses').then(res =>{
      console.log(res.data);
      this.setState({
        houses: res.data
      })
    }).catch(err => console.log(err))
  }
 
  deleteHouse = (id) => {
    axios.delete(`/api/houses/${id}`).then(res => {
      console.log(res.data)
      this.setState({
        houses:res.data
      })
    }).catch(err => console.log(err))
  }
  

  render() {
    const mappedHouses = this.state.houses.map(house => {
        return <House house={house} key={house.id} deleteFn={this.deleteHouse}/>
    })

    return <div>
        <div>{mappedHouses}</div>
        <Link to={'/wizard'}><button>Add New Property</button></Link>
        </div>;
  }
}
