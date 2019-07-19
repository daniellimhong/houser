import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import store from '../../store';

export default class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }

  postHouse = () => {
    const newHouse = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      img: this.state.img
    };
    axios
      .post("/api/houses", newHouse)
      .then(res => {
        this.setState({
          houses: res.data
        });
      })
      .catch(err => console.log(err));
  };

  universalChangeHander = (property, value) => {
    this.setState({
      [property]: value
    });
  };

nextPath(path){
    this.props.history.push(path)
}

  render() {
    return (
      <div>
        <h2>Add New Listing</h2>

        <div>
          <h3>Property Name</h3>
          <input
            onChange={event =>
              this.universalChangeHander(event.target.name, event.target.value)
            }
            name="name"
            value={this.state.name}
          />
        </div>

        <div>
          <h3>Address</h3>
          <input
            onChange={event =>
              this.universalChangeHander(event.target.name, event.target.value)
            }
            name="address"
            value={this.state.address}
          />
        </div>

        <div>
          <h3>City</h3>
          <input
            onChange={event =>
              this.universalChangeHander(event.target.name, event.target.value)
            }
            name="city"
            value={this.state.city}
          />
          <h3>State</h3>
          <input
            onChange={event =>
              this.universalChangeHander(event.target.name, event.target.value)
            }
            name="state"
            value={this.state.state}
          />
          <h3>Zip</h3>
          <input
            onChange={event =>
              this.universalChangeHander(event.target.name, event.target.value)
            }
            name="zip"
            value={this.state.zip}
            type="number"
          />
          <h3>Image URL</h3>
          <input
            onChange={event =>
              this.universalChangeHander(event.target.name, event.target.value)
            }
            name="img"
            value={this.state.img}
            type="text"
          />

        </div>

    
          <button
            onClick={e => {
              this.postHouse(); 
              this.nextPath('/');
            }}>
            Add
          </button>
        

        <Link to={"/"}>
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
