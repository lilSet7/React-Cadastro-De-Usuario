export const Profile = (props) => {
  return (
    <div className="profile">
      <div className="header-perfil">
        <h3>Dados Persoais: </h3>
        <hr/>
      </div>
      <div className="body-perfil">
        <p>Nome: {props.user.name}</p>
        <p>Cpf: {props.user.cpf}</p>
        <p>Veiculo: {props.user.veichle}</p>
        <p>Placa do Veiculo: {props.user.placa}</p>
        <p>Cor: {props.user.cor}</p>
        <p>Data De Fabricação: {props.user.dataToVeichle} </p>
        <p>Mecanico(eletricista): {props.user.frontMecanic}</p>
        <p>Mecanico(montador): {props.user.backMecanic}</p>
        <p>Endereço: {props.user.andrees}</p>
        <p>Cep: {props.user.cep}</p>
        <p>Fim de Garantia: {props.reverseDate(props.user.endDate)}</p>
        <p>Serviço: {props.user.service}</p>
        <p>Valor: R${props.user.value}</p>
      </div>
      <hr/>
    </div>
  )
}
