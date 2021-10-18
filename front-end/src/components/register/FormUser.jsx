import React from 'react';
import axios from 'axios';
import {Main} from '../template/Main';
import { Form } from '../template/Form'

const headerProps = {
  icon: 'address-book',
  title: 'Cadastro',
  subtitle: 'Cadastro de usuarios'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
  user: {
    name: '', 
    cpf: '', 
    veichle: '', 
    placa: '',
    cor: '',
    dataToVeichle: '',
    frontMecanic: '',
    backMecanic: '', 
    andrees: '', 
    cep: '', 
    service: '', 
    endDate: '', 
    value: '', 
    returns: []
   },
  list: []
}


export default class FormUser extends React.Component {

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
    console.log('event')

  }
  render(){
    return(
      <Main {...headerProps}>
         <Form
           name={this.state.user.name}
           cpf={this.state.user.cpf}
           veichle={this.state.user.veichle}
           placa={this.state.user.placa}
           andrees={this.state.user.andrees}
           cep={this.state.user.cep}
           service={this.state.user.service}
           endDate={this.state.user.endDate}
           value={this.state.user.value}
           cor={this.state.user.cor}
           dataToVeichle={this.state.user.dataToVeichle}
           frontMecanic={this.state.user.frontMecanic}
           backMecanic={this.state.user.backMecanic}
           onChange={(e) => this.updateField(e)}
           save={() => this.save()}
           clear={() => this.clear()}
           />
      </Main>
    )
  }

}
