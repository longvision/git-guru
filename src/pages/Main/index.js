import React, { Component } from "react";

import { connect } from "react-redux";
import logo from "../../assets/logo.png";
import { Container, Form, Logo, Results } from "./styles";
import List from "../../components/List";

class Main extends Component {
  state = {
    repositoryInput: "",
  };

  handleAddRepository = (e) => {
    e.preventDefault();
    if (this.props.repos.data.length > 0) {
      this.props.clear();
    } else {
      this.state.repositoryInput && this.props.list(this.state.repositoryInput);
    }
  };

  handleDelete = () => {
    this.setState({ repositoryInput: "" });
    this.props.clear();
  };

  render() {
    const { repositoryInput } = this.state;

    return (
      <Container>
        <Logo src={logo} alt="Github Guru" />
        <div>
          <h1>{this.props.repos.data && this.props.repos.data.id}</h1>
          <Form onSubmit={this.handleAddRepository}>
            <input
              type="text"
              placeholder="Type the Git username..."
              value={this.state.repositoryInput}
              onChange={(e) =>
                this.setState({ repositoryInput: e.target.value })
              }
            />
            {this.props.repos.data.length ? (
              <button onClick={this.handleDelete}>Delete</button>
            ) : (
              <button type="submit">List Repos</button>
            )}
          </Form>
        </div>
        <List repositoryInput={repositoryInput} />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  list: (payload) => dispatch.repos.listAsync(payload),
  clear: () => dispatch.repos.clearAsync(),
});
const mapStateToProps = (state) => ({
  repos: state.repos,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
