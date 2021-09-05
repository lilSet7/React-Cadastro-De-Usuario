import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main';


const headerProps = {
  icon: 'users',
  title: 'Usuarios',
  subtitle: 'Cadastro de usuario: Inclui, Listar, Altera e Excluir'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
  user: {name: '', cpf: '', veichle: '', placa: '', andrees: '', cep: '', service: '', endDate: '' },
  list: []
}


export default class UserCrud extends Component {
  state = { ...initialState }

  componentDidMount(){
    axios(baseUrl).then(response => {
      this.setState({list: response.data})
    })
  }


  clear() {
    this.setState({user: initialState.user})
  }

  save(){
    const user = this.state.user;
    const method = user.id ? 'put' : 'post';
    const url = user.id ?  `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(resp => {
        const list = this.getUpdateList(resp.data)
        this.setState({user: initialState.user, list})
      })
  }

  getUpdateList(user, add=true){
    const list = this.state.list.filter(u => u.id !== user.id)
    if(add) list.unshift(user)
    return list
  }

  updateField(event){
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({ user })

  }

  renderForm() {
    return (
      <div className='form' >
        <div className='row' >
          <div className='col-12 col-md-6' >
            <div className='form-group'>
              <label>Nome</label>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Digite seu nome'
                value={this.state.user.name}
                onChange={e => this.updateField(e)}
                />
            </div>
          </div >

          <div className='col-12 col-md-6' >
            <div className='form-group'>
              <label>E-mail</label>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='Digite seu email'
                value={this.state.user.email}
                onChange={e => this.updateField(e)}
                />
              </div>
          </div >

          <div className='col-12 col-md-6' >
            <div className='form-group'>
              <label>Cpf</label>
              <input
                type='text'
                className='form-control'
                name='cpf'
                placeholder='Digite seu Cpf'
                value={this.state.user.cpf}
                onChange={e => this.updateField(e)}
                />
            </div>
          </div>

          <div className='col-12 col-md-6' >
            <div className='form-group'>
              <label>Veiculo</label>
              <input
                type='text'
                className='form-control'
                name='veichle'
                placeholder='Digite seu Veiculo'
                value={this.state.user.veichle}
                onChange={e => this.updateField(e)}
                />
            </div>
          </div>

          <div className='col-12 col-md-6' >
            <div className='form-group'>
              <label>Placa</label>
              <input
                type='text'
                className='form-control'
                name='placa'
                placeholder='Digite seu Placa'
                value={this.state.user.placa}
                onChange={e => this.updateField(e)}
                />
            </div>
          </div>

          <div className='col-12 col-md-6' >
            <div className='form-group'>
              <label>Endereço</label>
              <input
                type='text'
                className='form-control'
                name='andrees'
                placeholder='Digite seu Endereço'
                value={this.state.user.andrees}
                onChange={e => this.updateField(e)}
                />
            </div>
          </div>

          <div className='col-12 col-md-6' >
            <div className='form-group'>
              <label>Cep</label>
              <input
                type='text'
                className='form-control'
                name='cep'
                placeholder='Cep'
                value={this.state.user.cep}
                onChange={e => this.updateField(e)}
                />
            </div>
          </div>

          <div className='col-12 col-md-6' >
            <div className='form-group'>
              <label>Serviço</label>
              <input
                type='text'
                className='form-control'
                name='service'
                placeholder='Tipo De Serviço'
                value={this.state.user.service}
                onChange={e => this.updateField(e)}
                />
            </div>
          </div>

          <div className='col-12 col-md-6' >
            <div className='form-group'>
              <label>Fim De Garantia</label>
              <input
                type='date'
                className='form-control'
                name='date'
                placeholder='Digite seu Cpf'
                value={this.state.user.date}
                onChange={e => this.updateField(e)}
                />
            </div>
          </div>
        </div >
        <hr/>
        <div className='row' >
          <div  className='col-12 d-flex justify-content-end'>
            <button className='btn btn-primary' onClick={(e) => this.save(e)}>
              Salvar
            </button>
            <button className='btn btn-secondary ml-2' onClick={(e) => this.clear(e)}>
              Cancelar
            </button>
          </div>
        </div>
      </div >
    )
  }

  load(user){
    this.setState({user})
  }

  remove(user){
    axios.delete(`${baseUrl}/${user.id}`).then(response => {
      const list = this.getUpdateList(user, false)
      this.setState({list})
    })
  }

  renderTable() {
    return (
      <table className='table mt-4'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cpf</th>
            <th>Cep</th>
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
    return this.state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
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
  render() {
    console.log(this.state.list)
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    )
  }
}
