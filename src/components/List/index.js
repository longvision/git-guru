import React, { Component, Fragment } from "react";

import history from "../../services/history";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Item, Repository, Button, Card, Loading } from "./styles";

class List extends Component {
  state = { toCommits: false, full_name: "" };

  openCommits = (rep) => {
    this.props.list(rep.full_name);
  };

  render() {
    const { repos } = this.props;
    // const { full_name } = this.state;

    // if (this.state.toCommits === true) {
    //   return <Redirect to={`/repos/${full_name}/commits/`} />;
    // }
    return (
      <Fragment>
        {repos.loading && <Loading> Carregando...</Loading>}
        <Item>
          {repos.data &&
            repos.data.map((rep) => (
              <Card key={rep.id} data-testid="repo-list">
                <Repository>
                  <img src={rep.owner.avatar_url} alt="avatar" />
                  <header>
                    <strong>{rep.login}</strong>
                    <strong>{rep.name}</strong>
                    <small>{rep.description}</small>
                  </header>
                </Repository>
                <Link to="/commits">
                  <Button onClick={() => this.openCommits(rep)}>Repo</Button>
                </Link>
              </Card>
            ))}
        </Item>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  list: (payload) => dispatch.commits.listAsync(payload),
});

const mapStateToProps = (state) => ({
  repos: state.repos,
  commits: state.commits,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
