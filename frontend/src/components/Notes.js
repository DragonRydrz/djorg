import React, { Component } from 'react';
import { CardColumns, Card, CardHeader, CardBody, CardText } from 'reactstrap';
import axios from 'axios';

export default class Notes extends Component {
  state = {
    notes: [],
    personalnotes: [],
  };

  componentDidMount() {
    axios
      .get(`https://agenung-djorg.herokuapp.com/api/personal_notes/`, {
        headers: {
          Authorization: 'Token 4b7652a5e022f474a58faef595c337c5a2788eb1',
        },
      })
      .then(response => {
        this.setState({ personalnotes: response.data });
      })
      .catch(err => console.log(err));

    axios
      .get(`https://agenung-djorg.herokuapp.com/api/notes/`, {
        headers: {
          Authorization: 'Token 4b7652a5e022f474a58faef595c337c5a2788eb1',
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
