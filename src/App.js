import React, { Component } from "react";
import "./App.css";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const query = gql`
  query getRepositoriesfromUser($user: String!) {
    user(login: $user) {
      repositories(first: 10, privacy: PUBLIC) {
        totalCount
        edges {
          node {
            name
            description
            createdAt
          }
        }
      }
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "daviwesley"
    };
  }
  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            value={this.state.user}
            onChange={e => this.setState({ user: e.target.value })}
          />
        </form>
        <Query query={query} variables={{ user: this.state.user }}>
          {({ data, loading, error }) => {
            if (loading) return <p>loading...</p>;
            if (error) {
              if (
                (error.message =
                  "GraphQL error: Could not resolve to a User with the login of ''")
              ) {
                return <p>Informe um usuário</p>;
              } else return <p>error.message</p>;
            }
            return (
              <div>
                <ul>
                  {data.user.repositories.edges.map(({ node }) => (
                    <li key={node.name}>{node.name}</li>
                  ))}
                </ul>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
