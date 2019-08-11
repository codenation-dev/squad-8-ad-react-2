import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button";
import Input from "../../components/Input";

import FilterLanguage from "../../components/FilterLanguage";
import FilterYear from "../../components/FilterYear";

import { Container, Header, Content } from "./styles";
import Card from "../../components/Card";
import { repoRequest } from "../../store/modules/repo/actions";

import { format, parseISO, isSameYear, compareDesc } from "date-fns";
import pt from "date-fns/locale/pt";

function parsedDate(data) {
  return data
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

function contributionsFilters(data, searchLang, searchYear) {
  if (searchLang && searchYear) {
    return data
      .filter(ret => ret.language === searchLang)
      .filter(year =>
        isSameYear(
          parseISO(year.created_at),
          new Date(Number(searchYear), 1, 1)
        )
      );
  } else if (searchLang && !searchYear) {
    return data.filter(ret => ret.language === searchLang);
  } else if (!searchLang && searchYear) {
    return data.filter(year =>
      isSameYear(parseISO(year.created_at), new Date(Number(searchYear), 1, 1))
    );
  }
  return data;
}

function Main() {
  const [login, setlogin] = useState("");
  const [searchLang, setSearchLang] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const dispatch = useDispatch();

  const { loading, data } = useSelector(state => state.repo);

  const repo = contributionsFilters(parsedDate(data), searchLang, searchYear);

  return (
    <Container>
      <Header>
        <div>
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
        </div>
        <FilterLanguage
          data={data}
          onChange={e => setSearchLang(e.target.value)}
          searchLang={searchLang}
        />
        <FilterYear
          data={data}
          onChange={e => setSearchYear(e.target.value)}
          searchYear={searchYear}
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
