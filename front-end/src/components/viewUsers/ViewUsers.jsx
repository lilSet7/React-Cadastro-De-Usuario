import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {Main} from '../template/Main'
import './styles.css'


const baseUrl = 'http://localhost:3001/users'
const propsHeader = {
  icon: 'users',
  title: 'Usuarios cadastrados',
  subtitle: 'Usuarios',

}

export default class ViewUsers extends React.Component{

  state = {
    itens: [],
    searchValue: ''
  }

  componentDidMount(){
    axios(baseUrl).then( response => {
      this.setState({itens: response.data})
    })
  }

  getUpdateList(user, add=true){
    const itens = this.state.itens.filter(u => u.id !== user.id)
    if(add) itens.unshift(user)
    return itens
  }


  remove(user){
    axios.delete(`${baseUrl}/${user.id}`).then(response => {
      const itens = this.getUpdateList(user, false)
      this.setState({itens})
    })
  }

  handleSaveStorage(user){
    let item = JSON.stringify(user)
    localStorage.setItem('user', item)
    console.log(item)
  }


  renderTable() {
    const {itens, searchValue} = this.state;

    const filteredUsers = !!searchValue ?
      itens.filter((item) => {
        return item.placa.toLowerCase().includes(searchValue.toLowerCase())
      })
      : itens;

    return (
      <>
      {!!searchValue && (
        <>
          <p>Pesquisa: {searchValue}</p>
        </>
      )}
      <input type='search' placeholder='Placa do veiculo' id='searchValue' onChange={(e) => this.setState({searchValue: e.target.value})} />
      {console.log(this.state.searchValue)}
      <div className='table-responsive-sm'>
        <table className='table mt-4'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cpf</th>
              <th>Veiculo</th>
              <th>Placa</th>
              <th>Endereço</th>
              <th>Cep</th>
              <th>Serviço</th>
              <th>Fim de Garantia</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows(filteredUsers)}
          </tbody>
        </table>
      </div>
      </>
    )
  }

  renderRows(itens){
    return itens.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.cpf}</td>
          <td>{user.veichle}</td>
          <td>{user.placa}</td>
          <td>{user.andrees}</td>
          <td>{user.cep}</td>
          <td>{user.service}</td>
          <td>{user.endDate}</td>
          <td>{user.value}</td>
            <td>
           <Link to={`/update/${user.id}`}>
              <button className='btn btn-warning mr-2' onClick={() => this.handleSaveStorage(user)}>
               <i className='fa fa-pencil'> </i>
              </button>
            </Link>

              <button className='btn btn-danger ml-2' onClick={() => this.remove(user)}>
                <i className='fa fa-trash'></i>
              </button>

          </td>
        </tr>
      )
    })
  }

  renderCard(itens){
    return itens.map(user => {
      return(
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body mb-3">
                <h5 class="card-title mb-3">Placa: {user.placa}</h5>
                <h6 className='card-subtitle mb-3'>Veiculo: {user.veichle}</h6>
                <p class="card-text">Cliente: {user.name}</p>
                  <Link to={`/update/${user.id}`}>
                     <button className='btn btn-warning mr-2' onClick={() => this.handleSaveStorage(user)}>
                      <i className='fa fa-pencil'> </i>
                     </button>
                   </Link>
                   
                  <button className='btn btn-danger mr-3' onClick={() => this.remove(user)}>
                    <i className='fa fa-trash'></i>
                  </button>

                  <Link to={`user/${user.id}`}>
                  <button className='btn btn-seta' onClick={() => this.handleSaveStorage(user)}>
                      <i class="fa fa-chevron-right"></i>
                  </button>
                  </Link>

              </div>
            </div>
          </div>
      )
    })
  }

  render(){
    const {itens, searchValue} = this.state;
    const filteredUsers = !!searchValue ?
      itens.filter((item) => {
        return item.placa.toLowerCase().includes(searchValue.toLowerCase())
      })
      : itens;

    return(
      <Main {...propsHeader}>
        {!!searchValue && (
            <p>Pesquisa: {searchValue}</p>
        )}
        <input type='search' placeholder='Placa do veiculo' id='searchValue' onChange={(e) => this.setState({searchValue: e.target.value})} />

        <div className='row'>
          {this.renderCard(filteredUsers)}
        </div>
      </Main>
    )
  }
}
