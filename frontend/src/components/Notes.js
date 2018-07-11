import React, { Component } from 'react';
import axios from 'axios';

export default class Notes extends Component {
  state = {
    notes: [],
    personalNotes: [],
  };
  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/api/notes')
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  }
  render() {
    return <div />;
  }
}
