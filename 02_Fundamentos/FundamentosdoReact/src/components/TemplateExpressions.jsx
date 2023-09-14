const TemplateExpressions = () => {
  // Podemos criar variáveis aqui
  const name = "Pedro";
  //   classe,arrays e tudo que o javaScript pode oferecer
  const data = {
    age: 27,
    job: "Programer",
  };
  return (
    <div>
      {/* Utilizando as chaves podemos imprimir no nosso JSX, qualquer coisa que venha no JS */}
      <h1>Olá {name}, tudo bem?</h1>
      <h2>sua idade é {data.age}?</h2>
      <h2>vc trabalha com {data.job}?</h2>
      <p>{10 + 15}</p>
      <p>{console.log("testando usar JS no JSX")}</p>
    </div>
  );
};

export default TemplateExpressions;
