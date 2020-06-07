
import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:52599/api/posts/GetPosts`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>

        {this.state.persons.map(person =>
          <li>{person.postTitle} <br></br> <img src={person.postPhoto}></img> <br></br>  {person.postDesc} <p>&nbsp;</p>  </li>
        )}
      </ul>
    )
  }
}