import React, {useState} from 'react';
import { Main } from '../template/Main';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';


const headerProps = {
    icon: 'users',
    title: 'Atualizar Cadastro ',
    subtitle: 'Atualize o Cadastro'
};

export function UpdateUser(props){

    // localStorage5
    const storageUserJson = localStorage.getItem('user')
    const storageUser = JSON.parse(storageUserJson)

    const {id} = useParams()
    const history = useHistory()
    const [user, setUser] = useState(storageUser)
    const baseUrl = `http://localhost:3001/users/${id}`

    // Eventos
    const handleAction = () => {
      const userModal = {
        id: user.id,
        name: user.name,
        cpf: user.cpf,
        veichle: user.veichle,
        placa: user.placa,
        endDate: user.endDate,
        cep: user.cep,
        andrees: user.andrees,
        service: user.service,
        value: user.value,
        returns: user.returns
}

      axios.put(baseUrl, userModal)
      localStorage.clear()
      history.push('/users')

    }

    const handleUpdateInput = (e) => {
      const items = {...user}
      items[e.target.name] = e.target.value
      setUser(items)
}

    const formRender = () => {
        const items = user
        return (
            <div>
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
                    value={items.name}
                    onChange={handleUpdateInput}

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
                    value={items.cpf}
                    onChange={handleUpdateInput}
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
                    value={items.veichle}
                    onChange={handleUpdateInput}
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
                    value={items.placa}
                    onChange={handleUpdateInput}
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
                    value={items.andrees}
                    onChange={handleUpdateInput}
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
                    value={items.cep}
                    onChange={handleUpdateInput}
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
                    value={items.service}
                    onChange={handleUpdateInput}
                    />

                </div>
              </div>

              <div className='col-12 col-md-6' >
                <div className='form-group'>
                  <label>Fim De Garantia</label>

                  <input
                    type='date'
                    className='form-control'
                    name='endDate'
                    placeholder='Digite seu Cpf'
                    value={items.endDate}
                    onChange={handleUpdateInput}
                    />

                </div>

              </div>

              <div className='col-12 col-md-6' >
                <div className='form-group'>
                  <label>Valor</label>

                  <input
                    type='text'
                    className='form-control'
                    name= 'value'
                    placeholder='Digite o Valor'
                    value={items.value}
                    onChange={handleUpdateInput}
                    />

                  </div>
              </div >

            </div >
            <hr/>
            <div className='row' >
              <div  className='col-12 d-flex justify-content-end'>
                <button className='btn btn-primary' onClick={handleAction}>
                  Salvar
                </button>
        <button className='btn btn-secondary ml-2'>
                  Cancelar
                </button>
              </div>
            </div>
          </div >

        </div>
        )
    }



    return (
        <Main {...headerProps}>
            {formRender()}
        </Main>

    )
};
