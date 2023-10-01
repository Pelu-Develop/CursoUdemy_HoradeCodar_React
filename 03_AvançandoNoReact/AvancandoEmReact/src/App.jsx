import { useState } from "react";

/* importação de style */
import "./App.css";

/* importação de imagem */
import City from "./assets/city.jpg";
import CardDetails from "./components/CardDetails";

/* importação de componentes */
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

const name = "Matheus";

const cars = [
  { id: 1, brand: "Ferrari", color: "vermelho", newCar: true, km: 0 },
  { id: 2, brand: "KIA", color: "branco", newCar: false, km: 34343 },
  { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 12597 },
];

function showMessage() {
  console.log("Evento do componente pai");
}

function App() {
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    {id:1, name: "Pedro", job:"Programador", age:27},
    {id:2, name: "Gabrielle", job:"Empresária", age:24},
    {id:3, name: "Candy", job:"Desempregada", age:8},
  ]

  return (
    <>
      <h1>Começando a seção 3</h1>
      {/* Imagem sendo imprimida pela pasta public */}
      <div>
        <img src="/Primeira_imagem.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      {/* Props */}
      <ShowUserName name={name} />
      {/* Destructuring */}
      <CardDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* Reaproveitando */}
      <CardDetails brand="Ford" color="Preto" km={0} newCar={true} />
      <CardDetails brand="Fiat" color="Branco" km={5000} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CardDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* Fragments */}
      <Fragments propFragments="teste" />
      {/* children */}
      <Container myValue="teste">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="teste 2">
        <h6>Testando o container</h6>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Desafio */}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} job={user.job} age={user.age} />
      ))}
    </>
  );
}

export default App;
