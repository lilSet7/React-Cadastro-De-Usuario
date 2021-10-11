import { React, useState } from 'react' ;
import axios from 'axios';
import './style.css';
import { Main } from '../template/Main';
import { useHistory, useParams } from 'react-router-dom';




const propsHeader = {
  icon: 'user',
  title: 'Informações de Usuarios',
  subtitle: 'Edite e anote observações',

}

export const ViewUser = (props) => {

// localStorage5
  const storageUserJson = localStorage.getItem('user')
  const storageUser = JSON.parse(storageUserJson)


// states
  const [user, setUser] = useState(storageUser);
  const [useTitleReturn, setTitleReturn] = useState('');
  const [useBodyReturn, setBodyReturn] = useState('');
  const {id} = useParams();
  const history = useHistory();

  const baseUrl = `http://localhost:3001/users/${id}`;


  const handleAction = (e) => {
    const items = {...user}
    items.returns.push({title: useTitleReturn, body: useBodyReturn})
    setUser(items)
    axios.put(baseUrl, user).then((response) => {
      console.log(response.data)
    })}

  const remove = (item, index) => {
    item.returns.splice(index, 1)
    axios.put(baseUrl, item)
    console.log(item)
    history.push(`/user/${id}`)
    }


  return (
    <Main {...propsHeader}>
      <div className="perfil">
        <div className="header-perfil">
          <h3>Dados Persoais: </h3>
          <hr/>
        </div>
        <div className="body-perfil">
          <p>Nome: {user.name}</p>
          <p>Cpf: {user.cpf}</p>
          <p>Veiculo: {user.veichle}</p>
          <p>Placa do Veiculo: {user.placa}</p>
          <p>Cor: {user.color}</p>
          <p>Mecanico(eletricista): {user.dianteira}</p>
          <p>Mecanico(montador): {user.traseira}</p>
          <p>Endereço: {user.andrees}</p>
          <p>Cep: {user.cep}</p>
          <p>Fim de Garantia: {user.endDate}</p>
          <p>Serviço: {user.service}</p>
          <p>Valor: R${user.value}</p>
        </div>
        <hr/>
      </div>
      <div className="returns">
        <h3>Retornos</h3>
        <div className='row'>
          { user.returns.map( (item, index) => {
            return (
          <div class="col-sm-3">
            <div class="card" key='index'>
              <div class="card-body mb-3">
                <h5 class="card-title mb-3">Data: {item.title}</h5>
                <h6 className='card-subtitle mb-3'></h6>
                <p class="card-text">Motivo Do Retorno: {item.body}</p>


                  <button className='btn btn-danger mr-3' onClick={() => remove(user, index)}>
                    <i className='fa fa-trash'></i>
                  </button>

              </div>
            </div>
          </div>
)})}
        </div>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Adicionar Retornos</button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Motivo do Retorno</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="date" class="col-form-label">Data</label>
                      <input onChange={(e) => setTitleReturn(e.target.value)} type="date" class="form-control" id="date"/>
                    </div>
                    <div class="mb-3">
                      <label for="description" class="col-form-label">Descrição do Retorno</label>
                      <textarea onChange={(e) => setBodyReturn(e.target.value)} class="form-control" id="description"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                  <button type="button" class="btn btn-primary" onClick={handleAction} >Enviar </button>
                </div>
              </div>
            </div>
          </div>


    </Main>
  )
}
