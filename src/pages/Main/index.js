import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { MdSearch } from "react-icons/md";

import { Container, Header, Content } from "./styles";
import Card from "../../components/Card";
import { repoRequest } from "../../store/modules/repo/actions";

import format from "date-fns/format";
import br from "date-fns/locale/pt";
import isSameYear from "date-fns/is_same_year";
const DATE_FORMAT = "D/M/YYYY";

function Main({ repoRequest, repo }) {
  const [login, setlogin] = useState("");
  const contributionsFromYear = repo.data.filter(data =>
    isSameYear(data.created_at, new Date())
  );
  return (
    <Container>
      <Header>
        <Input
          placeholder="Digite o nome do usuário."
          value={login}
          onChange={e => setlogin(e.target.value)}
        />
        <Button type="button" onClick={() => repoRequest(login)}>
          <MdSearch size={18} color="rgba(8, 81, 145, 0.7)" />
        </Button>
      </Header>

      <Content>
        {repo.loading && <p>Carregando...</p>}
        {contributionsFromYear.map(repo => {
          return (
            <Card
              key={repo.full_name}
              title={repo.full_name}
              date={format(repo.created_at, DATE_FORMAT, { locale: br })}
              description={
                repo.description ? repo.description : "Sem descrição"
              }
              language={repo.language}
            />
          );
        })}
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
