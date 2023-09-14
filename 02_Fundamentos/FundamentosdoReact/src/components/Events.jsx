const Events = () => {
  /* podemos colocar  */
  /* Temos acesso ao argumento especial "e" que mostra todos dados que o evento contem */
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("cliquei no botão");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      <div>
        {/* não colocamos tipo "handleMyEvent()", porque dessa maneira o evento vai ser executado toda vez que lermos o código */}
        <button onClick={handleMyEvent}>clique aqui!</button>
      </div>
      <div>
        {/* Outra maneira de executar uma função de um evento, dentro da própria tag no HTML, porem é recomendado para funções mais básicas */}
        <button onClick={() => console.log("clicou")}>Clique aqui também!</button>
        {/* Exemplo de má pratica abaixo */}
        <button
          onClick={() => {
            if (true) {
              console.log("Isso não deveria existir =)");
            }
          }}
        >
          Clica aqui, por favor.
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
