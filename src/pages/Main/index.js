import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button";
import Input from "../../components/Input";

import FilterLanguage from "../../components/FilterLanguage"
import FilterYear from "../../components/FilterYear"

import { Container, Header, Content, Selector, Span } from "./styles";
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

function contributionsFilters(data, searchLang, searchYear) {

  return searchLang && searchYear
    ? data.filter(ret => ret.language === searchLang).filter(year => year.created_at.slice(0,4) === searchYear) 
      : searchLang ? data.filter(ret => ret.language === searchLang)
        : searchYear ? data.filter(year => year.created_at.slice(0,4) === searchYear) : ''
}

function Main() {
  const [login, setlogin] = useState("");
  const [searchLang, setSearchLang] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const dispatch = useDispatch();

  const { loading, data } = useSelector(state => state.repo);

  const repo = contributionsFromYear(data);

  const filterAll = contributionsFilters(data, searchLang, searchYear)
  const filterRepo = searchLang || searchYear ? true : false

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

      <Selector>
        <Span>Filtro</Span>
        <FilterLanguage data={data} onChange={(e) => setSearchLang(e.target.value)} searchLang={searchLang}/>
        <FilterYear data={data} onChange={(e) => setSearchYear(e.target.value)} searchYear={searchYear}/>
      </Selector>

      <Content>
        {filterRepo
          ? filterAll.map(filtered => {
              return (
                <Card
                  key={filtered.full_name}
                  title={filtered.name}
                  date={filtered.parsed_date}
                  description={
                    filtered.description ? filtered.description : "Sem descrição"
                  }
                  language={filtered.language}
                />
              );
            })
            : repo.map(repo => {
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
