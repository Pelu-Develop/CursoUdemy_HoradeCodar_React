const Challenge = () => {
  const tempoTrabalhado = {
    idade: 70,
    começoDoTrabalho: 18,
  };

  const calculoAnosTrabalhados = () => {
    const resultado = tempoTrabalhado.idade - tempoTrabalhado.começoDoTrabalho;
    console.log(resultado);
  };

  return (
    <div>
      <div>
        <h1>A sua idade é de {tempoTrabalhado.idade}</h1>
        <h1>E vc começou a trabalhar aos {tempoTrabalhado.começoDoTrabalho}</h1>
      </div>
      <button onClick={calculoAnosTrabalhados}>
        Clique aqui para saber quantos anos vc trabalhou
      </button>
    </div>
  );
};

export default Challenge;
