

const UserDetails = ({id,name,job,age}) => {
  return (
    <div key={id}>
    <h2>{name}</h2>
    <p>Idade: {age}</p>
    <p>Profissão: {job}</p>
    {age >= 18 ? (<p>Pode tirar a carteira de habilitação </p>) : (<p>Menor de idade</p>)}
    </div>
  )
}

export default UserDetails