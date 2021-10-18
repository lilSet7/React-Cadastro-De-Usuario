export const Table = (props) => {
  return (
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
    
  )
}
