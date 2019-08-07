import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { Container, Header, Content } from "./styles";
import Card from "../../components/Card";
import { repoRequest } from "../../store/modules/repo/actions";

import { format, parseISO, isSameYear, compareDesc } from "date-fns";
import pt from "date-fns/locale/pt";

function contributionsFromYear(data) {
  return data
    .filter(dt => isSameYear(parseISO(dt.created_at), new Date()))
    .map(filteredData => ({
      ...filteredData,
      parsed_date: format(
        parseISO(filteredData.created_at),
        "d 'de' MMMM 'de' yyyy",
        {
          locale: pt
        }
      )
    }))
    .sort((a, b) =>
      compareDesc(parseISO(a.created_at), parseISO(b.created_at))
    );
}

function Main() {
  const [login, setlogin] = useState("");
  const dispatch = useDispatch();

  const { loading, data } = useSelector(state => state.repo);

  const repo = contributionsFromYear(data);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Digite o nome do usuário."
          value={login}
          onChange={e => setlogin(e.target.value)}
        />
        <Button
          loading={loading ? 1 : 0}
          type="button"
          onClick={() => dispatch(repoRequest(login))}
        />
      </Header>

      <Content>
        {repo.map(repo => {
          return (
            <Card
              key={repo.full_name}
              title={repo.name}
              date={repo.parsed_date}
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

export default Main;
