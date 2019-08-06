import React from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { MdSearch } from "react-icons/md";

import { Container, Header, Content } from "./styles";
import Card from "../../components/Card";

export default function Main() {
  return (
    <Container>
      <Header>
        <Input placeholder="Digite o nome do usuário." />
        <Button type="button">
          <MdSearch size={18} color="rgba(8, 81, 145, 0.7)" />
        </Button>
      </Header>

      <Content>
        <Card
          title="Codenation"
          description="Isso é legal pra xuxu, gosto muito de participar disso. Preciso de um texto muito longo"
        />
        <Card
          title="Codenation"
          description="Isso é legal pra xuxu, gosto muito de participar disso. Preciso de um texto muito longo"
        />
        <Card
          title="Codenation"
          description="Isso é legal pra xuxu, gosto muito de participar disso. Preciso de um texto muito longo"
        />
      </Content>
    </Container>
  );
}
