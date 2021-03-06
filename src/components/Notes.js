import React, { Component } from 'react';
import { CardColumns, Card, CardHeader, CardBody, CardText } from 'reactstrap';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();
// require('dotenv').config();

// let host = process.env.HOST || HOST;
let token = process.env.TOKEN || '8e00bcd0fccc9f6ce82e891fe589c282cd53537c';
// '4b7652a5e022f474a58faef595c337c5a2788eb1';

export default class Notes extends Component {
  state = {
    notes: [],
    personalnotes: [],
  };

  componentDidMount() {
    console.log(process.env);
    // console.log(testing);
    axios
      .get(`https://agenung-djorg.herokuapp.com/api/personal_notes/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(response => {
        this.setState({ personalnotes: response.data });
      })
      .catch(err => console.log(err));

    axios
      .get(`https://agenung-djorg.herokuapp.com/api/notes/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Notes</h1>
        <CardColumns>
          {this.state.notes.map(item => (
            <Card key={item.title}>
              <CardHeader>{item.title}</CardHeader>
              <CardBody>
                <CardText>{item.content}</CardText>
              </CardBody>
            </Card>
          ))}
        </CardColumns>
        <h1>Personal Notes</h1>
        <CardColumns>
          {this.state.personalnotes.map(item => (
            <Card key={item.title}>
              <CardHeader>{item.title}</CardHeader>
              <CardBody>
                <CardText>{item.content}</CardText>
              </CardBody>
            </Card>
          ))}
        </CardColumns>
      </div>
    );
  }
}
