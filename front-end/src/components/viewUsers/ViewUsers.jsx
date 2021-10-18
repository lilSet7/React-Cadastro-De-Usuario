import './styles.css'
import React from 'react';
import axios from 'axios';
import {Main} from '../template/Main';
import { Card } from '../template/Card';


const baseUrl = 'http://localhost:3001/users';

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
        <input className='form-control' type='search' placeholder='Placa do veiculo' id='searchValue' onChange={(e) => this.setState({searchValue: e.target.value})} />

        <div className='row'>
          {filteredUsers.map((item, index) => {
            return (
              <Card
                item={item}
                save={() => this.handleSaveStorage(item)}
                remove={() => this.remove(item)}
                key={index}
                />
              )
          })}
        </div>
      </Main>
    )
  }
}
