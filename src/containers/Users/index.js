import React, {useState, useEffect} from "react";

import axios from "axios";
import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User,
} from "./style";

function Users () {

  //const users = [];

  const [users, setUsers] = useState([]);
  


 

  useEffect(() => {
   async  function fetchUsers(){

    const {data: newUsers} = await axios.get("http://localhost:3001/users") 
     
     setUsers(newUsers)

    }

    fetchUsers()
  }, [users]) //userEffect so vai ser chamando quando o users for chamado

  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)
      const newUsers = users.filter((user) => users.id !==  userId)
      setUsers(newUsers)
  }


  

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              {user.name} - {user.age}
              <button onClick={() =>deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button to="/">
          <img alt="seta" src={Arrow} /> Cadastrar
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Users