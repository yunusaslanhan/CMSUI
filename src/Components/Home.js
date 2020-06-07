import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Weather from '../Components/Weather ';
import PostList from '../Components/PostList';
import Slider from '../Components/Slider';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Menu /> 
        <div className="container">
          <Slider />
          <div className="row" style={{ marginTop: 40 }}>
            <PostList />
          </div>

        </div>


      </div>

    );
  }
}
