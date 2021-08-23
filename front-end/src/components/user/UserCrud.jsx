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
  user: {name: '', email: '', },
  list: []
}


export default class UserCrud extends Component {
  state = { ...initialState }

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

  getUpdateList(user){
    const list = this.state.list.filter(u => u.id !== user.id)
    list.unshift(user)
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
        </div >
        <hr/>

      </div >
    )
  }


  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
      </Main>
    )
  }
}
