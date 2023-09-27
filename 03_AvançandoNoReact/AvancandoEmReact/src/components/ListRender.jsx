import { useState } from "react";

/* imprimindo listas */
const ListRender = () => {
  const [list] = useState(["Pedro", "Matheus", "João"]);

  const [users, setUsers] = useState([
    { id: 1, name: "pedro", age: 27 },
    { id: 2, name: "joão", age: 28 },
    { id: 3, name: "gabrielle", age: 24 },
  ]);

  /* essa função vai realizar o delete de um dos itens do arrays de users */
  const deleteRandom = () => {
    /* essa parte é responsável por gerar um numero aleatório que vai de 0 a 3, o floor arrendonda o numero para baixo */
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      /* fazemos a filtragem do array e só permitimos forma um novo array aqueles que tiverem o id diferente do numero aleatório formado */
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <>
            <li key={i}>{item}</li>
          </>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {" "}
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
      {/* teste com o random math */}
      <button onClick={() => console.log(Math.random() * 4)}> teste de Math random</button>
    </div>
  );
};

export default ListRender;
