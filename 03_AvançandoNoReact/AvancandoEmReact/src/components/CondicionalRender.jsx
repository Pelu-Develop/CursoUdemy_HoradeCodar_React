import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("João");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <h1>IF ternário</h1>
      {name === "João" ? (
        <div>
          <p>O nome é {name}</p>
        </div>
      ) : (
        <div>
          <p>O nome agora é {name}</p>
        </div>
      )}
      <button onClick={() => setName("pedro")}>clique para mudar de nome</button>
    </div>
  );
};

export default CondicionalRender;
