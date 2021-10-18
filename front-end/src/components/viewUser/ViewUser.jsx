import { React, useState } from 'react' ;
import axios from 'axios';
import './style.css';
import { Main } from '../template/Main';
import { Profile } from '../template/Profile'
import { useHistory, useParams } from 'react-router-dom';
import { reverseDate } from '../../Utility'

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
  const [user, setUser] = useState({...storageUser});
  const [useDateReturn, setDateReturn] = useState('');
  const [useBodyReturn, setBodyReturn] = useState('');
  const {id} = useParams();
  const history = useHistory();

  const baseUrl = `http://localhost:3001/users/${id}`;


  const handleAction = (e) => {
    const items = {...user}
    items.returns.push({title: useDateReturn, body: useBodyReturn})
    setUser(items)
    axios.put(baseUrl, user)
    setDateReturn('')
    setBodyReturn('')
  }

  const remove = (item, index) => {
    item.returns.splice(index, 1)
    axios.put(baseUrl, item)
    history.push(`/user/${id}`)
    }



  return (
    <Main {...propsHeader}>
      <Profile
        user={user}
        reverseDate={reverseDate}
         />

      <div className="returns">
        <h3>Retornos:</h3>
        <div className='row'>
          { user.returns.map( (item, index) => {
            return (
          <div key={index} className="col-sm-3">
            <div className="card">
              <div className="card-body mb-3">
                <h5 className="card-title mb-3">Data: {reverseDate(item.title)}</h5>
                <p className="card-text">Motivo Do Retorno: {item.body}</p>


                  <button className='btn btn-danger mr-3' onClick={() => remove(user, index)}>
                    <i className='fa fa-trash'></i>
                  </button>

              </div>
            </div>
          </div>
)})}
        </div>
        </div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Adicionar Retornos</button>

          <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Motivo do Retorno</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="date" className="col-form-label">Data</label>
                      <input onChange={(e) => setDateReturn(e.target.value)} type="date" className="form-control" id="date"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="col-form-label">Descrição do Retorno</label>
                      <textarea onChange={(e) => setBodyReturn(e.target.value)} className="form-control" id="description"></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                  <button type="button" className="btn btn-primary" onClick={handleAction} >Enviar </button>
                </div>
              </div>
            </div>
          </div>


    </Main>
  )
}
