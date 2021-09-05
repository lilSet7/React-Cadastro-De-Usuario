import React from 'react';
import axios from 'axios';
import Main from '../template/Main'

const baseUrl = 'http://localhost:3001/users'
const propsHeader = {
  icon: 'user',
  title: 'Usuarios cadastrados',
  subtitle: 'Usuarios',

}
export default class ViewUsers extends React.Component{

  state = {
    itens: []
  }

  componentDidMount(){
    axios(baseUrl).then( response => {
      this.setState({itens: response.data})
      console.log(this.state.itens)
    })
  }

  getUpdateList(user, add=true){
    const itens = this.state.itens.filter(u => u.id !== user.id)
    if(add) itens.unshift(user)
    return itens
  }

  load(user){
    this.setState({user})
  }

  remove(user){
    axios.delete(`${baseUrl}/${user.id}`).then(response => {
      const itens = this.getUpdateList(user, false)
      this.setState({itens})
    })
  }


  renderTable() {
    return (
      <table className='table mt-4'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cpf</th>
            <th>E-mail</th>
            <th>Veiculo</th>
            <th>Placa</th>
            <th>Endereço</th>
            <th>Cep</th>
            <th>Serviço</th>
            <th>Fim de Garantia</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderRows(){
    return this.state.itens.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.cpf}</td>
          <td>{user.email}</td>
          <td>{user.veichle}</td>
          <td>{user.placa}</td>
          <td>{user.andrees}</td>
          <td>{user.cep}</td>
          <td>{user.service}</td>
          <td>{user.endDate}</td>
            <td>
            <button className='btn btn-warning mr-2' onClick={() => this.load(user)}>
              <i className='fa fa-pencil'></i>
            </button>
            <button className='btn btn-danger ml-2' onClick={() => this.remove(user)}>
              <i className='fa fa-trash'></i>
            </button>
          </td>
        </tr>
      )
    })
  }

  render(){
    return(
      <Main {...propsHeader}>
        {this.renderTable()}
      </Main>
    )
  }
}
