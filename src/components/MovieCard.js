import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditForm from "./EditForm";
import Container from "react-bootstrap/Container"

class MovieCard extends Component {
  state = {
    toggleForm: false,
  };

  handleDeleteClick = () => {
    this.props.deleteFromShelf(this.props.movie.id);
  };

  handleEditClick = () => {
    this.showForm();
  };

  showForm = () => {
    console.log("hi from show form");
    if (this.state.toggleForm === false) {
      this.setState({
        toggleForm: true,
      });
    } else {
      this.setState({
        toggleForm: false,
      });
    }
  };

  render() {
    return (
        <div className="mx-auto">
          <Container>
          <Card bg={"light"} style={{marginTop: 30}}>
            <Card.Body>
              <Card.Title as="h3" className="text-center">
                {this.props.movie.title} - {this.props.movie.year}
              </Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={this.props.movie.poster} />
            {this.state.toggleForm ? (
              <Button variant="info" onClick={this.handleEditClick}>
                Close
              </Button>
            ) : (
              <Button variant="info" onClick={this.handleEditClick}>
                Edit Poster
              </Button>
            )}
            <Button variant="danger" onClick={this.handleDeleteClick}>
              Delete
            </Button>
            
          </Card>
          </Container>
          {this.state.toggleForm ? (
            <EditForm
              handleEditSubmit={this.props.handleEditSubmit}
              movie={this.props.movie}
            />
          ) : null}
        </div>
    );
  }
}

export default MovieCard;
