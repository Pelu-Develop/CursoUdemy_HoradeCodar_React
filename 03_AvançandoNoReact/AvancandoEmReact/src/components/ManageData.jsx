import { useState } from "react";

const ManageData = () => {
  let someData = 10;
  // useState é usado quando queremos que ele fique reenraizando a variável, ou seja, que ele possa ficar se atualizando
  const [number, setNumber] = useState(15);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Variável someData</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(number - 1)}>Mudar o state inicial</button>
        <button onClick={() => setNumber(number + 1)}>Mudar o state final</button>
      </div>
    </div>
  );
};

export default ManageData;
