import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  List,
  Ul,
  Card,
  Logo,
  CommitList,
  SearchInput,
  SearchBox,
  Title,
  Button,
  Repository,
} from "./styles";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

export const Commits = ({ commits }) => {
  const [search, setSearch] = useState();
  const [items, setItems] = useState();

  const filterList = (event) => {
    event.preventDefault();
    let updatedList = commits.filter(
      (c) =>
        c.commit.message
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
    );

    setSearch(event.target.value);
    setItems(updatedList);
  };

  useEffect(() => {
    setItems(commits);
  }, []);

  useEffect(() => {}, [search]);

  return (
    <Container>
      <Logo src={logo} alt="Github Guru" />
      <CommitList>
        <SearchInput
          type="text"
          className="form-control form-control-lg"
          placeholder="Filter by commit message..."
          onChange={filterList}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        />
      </CommitList>
      {search === "" ? (
        <Title>Last 20 commits:</Title>
      ) : (
        <Title>All commits with '{search}' repo will appear below:</Title>
      )}
      {items &&
        items.slice(0, 20).map((item) => (
          <Card key={item.sha}>
            <Repository>
              <div>
                {item.author === null ? (
                  <img src={avatar} alt="avatar" alt="avatar" />
                ) : (
                  <img src={item.author.avatar_url} />
                )}
                <h2>{item.commit.author.name}</h2>
              </div>
              <h2>
                Commit message:
                <strong>{item.commit.message}</strong>
              </h2>

              <h2>
                Last Commit:
                <small>{item.commit.author.date}</small>
              </h2>
            </Repository>
          </Card>
        ))}
    </Container>
  );
};

// const mapDispatchToProps = dispatch => bindActionCreators(CommitsActions, dispatch);

const mapStateToProps = (state) => ({
  repo: state.repos,
  commits: state.commits.data,
});

export default connect(
  mapStateToProps
  // mapDispatchToProps,
)(Commits);
