import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { MdSearch } from "react-icons/md";

import { Container, Header, Content } from "./styles";
import Card from "../../components/Card";
import { repoRequest } from "../../store/modules/repo/actions";

function Main(props) {
  console.log(props);
  const [login, setlogin] = useState("");
  return (
    <Container>
      <Header>
        <Input
          placeholder="Digite o nome do usuário."
          value={login}
          onChange={e => setlogin(e.target.value)}
        />
        <Button type="button" onClick={() => props.repoRequest(login)}>
          <MdSearch size={18} color="rgba(8, 81, 145, 0.7)" />
        </Button>
      </Header>

      <Content>
        {props.repo.data.map(repo => (
          <Card
            title={repo.full_name}
            description={repo.description ? repo.description : "Sem descrição"}
          />
        ))}
      </Content>
    </Container>
  );
}

const mapStatetoProps = state => ({
  repo: state.repo
});

const mapDispatchtoProps = {
  repoRequest
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Main);
