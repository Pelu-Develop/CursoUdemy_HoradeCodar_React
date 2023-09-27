const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o titulo do container</h2>
      {children}
      <h2>O meu valor é {myValue}</h2>
    </div>
  );
};

export default Container;
