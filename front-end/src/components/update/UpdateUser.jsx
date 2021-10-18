import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Main } from '../template/Main';
import { Form } from '../template/Form';


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
        frontMecanic: user.frontMecanic,
        backMecanic: user.backMecanic,
        dataToVeichle: user.dataToVeichle,
        cor: user.cor,
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
    const cancel = () => {
      history.push('/users')
    }

    return (
        <Main {...headerProps}>
          <Form
            name={user.name}
            cpf={user.cpf}
            veichle={user.veichle}
            placa={user.placa}
            andrees={user.andrees}
            cep={user.cep}
            service={user.service}
            endDate={user.endDate}
            value={user.value}
            onChange={(e) => handleUpdateInput(e)}
            save={() => handleAction()}
            clear={() => cancel()}
            />
        </Main>

    )
};
