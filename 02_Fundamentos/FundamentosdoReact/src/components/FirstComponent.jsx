import MyComponent from "./MyComponent";

/* Por conversão na area de trabalho, é muito mais usado o método de função com a arrow function */
const FirstComponent = () => {
  // Essa função faz isso ( exemplo de comentário)
  return (
    /* Retornamos aquilo que queremos que retorne no componente */
    /* Precisamos sempre incapsular os nossos elementos em uma tag, como no exemplo a tag div */
    <div>
      <h1>Meu Primeiro Componente</h1>
      <MyComponent />
    </div>
  );
};

/* Precisamos exportar aquele componente para utilizar ele em outro lugar*/
export default FirstComponent;
