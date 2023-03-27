import React from "react";
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User
} from "./style";

function App () {

  const users = [
    { id: Math.random(), name: "Rodolfo", age: 28 },
    { id: Math.random(), name: "Maia", age: 22 },
  ];
  

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="idade" />

        <Button>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              {user.name} - {user.age}
              <button><img src={Trash} alt="lata-de-lixo" /></button>
              </User>
          ))}
          
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App