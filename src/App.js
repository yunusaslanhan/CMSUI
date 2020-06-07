import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Components/Home';
import PersonList from './Components/PersonList';
import Menu from './Components/Menu';
import Weather from './Components/Weather ';
import PostList from './Components/PostList';
import Slider from './Components/Slider';
import MainPagePost from './Components/MainPagePost';
import PostDetail from './Components/PostDetail';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
        <BrowserRouter>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path="/User/MainPagePost/:id" component={MainPagePost}/>
        <Route path="/User/PostDetailPage/:id" component={PostDetail}/>
        </div>
        </BrowserRouter>


      

    );
  }
}
