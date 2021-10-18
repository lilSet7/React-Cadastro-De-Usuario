import './Form.css'

export const Form = (props) => {
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
               placeholder='Nome do Cliente'
               value={props.name}
               onChange={props.onChange}
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
               placeholder='Cpf do Cliente'
               value={props.cpf}
               onChange={props.onChange}
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
               placeholder='Modelo do Veiculo'
               value={props.veichle}
               onChange={props.onChange}
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
               placeholder='Placa do Veiculo'
               value={props.placa}
               onChange={props.onChange}
               />

           </div>
         </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="cor">Cor</label>
            <input
             type="text"
             className="form-control"
             name="cor"
             id="cor"
             placeholder='Cor Do Veiculo'
             value={props.cor}
             onChange={props.onChange}
             />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Ano Do Veiculo</label>
            <input
             type="text"
             className="form-control"
             name="dataToVeichle"
             placeholder='Ano do Veiculo'
             value={props.dataToVeichle}
             onChange={props.onChange}
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
               placeholder='Endereço do Cliente'
               value={props.andrees}
               onChange={props.onChange}
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
               placeholder='Cep do Cliente'
               value={props.cep}
               onChange={props.onChange}
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
               placeholder='Serviço Feito'
               value={props.service}
               onChange={props.onChange}
               />

           </div>
         </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Mecanico(Dianteira)</label>
            <input
             type="text"
             className="form-control"
             name="frontMecanic"
             placeholder='Mecanico Da Dianteira'
             value={props.frontMecanic}
             onChange={props.onChange}
             />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Mecanico(Traseira)</label>
            <input
             type="text"
             className="form-control"
             name="backMecanic"
             placeholder='Mecanico Da Traseira'
             value={props.backMecanic}
             onChange={props.onChange}
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
               value={props.endDate}
               onChange={props.onChange}
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
               value={props.value}
               onChange={props.onChange}
               />

             </div>
         </div >

       </div >
       <hr/>
       <div className='row' >
         <div  className='col-12 d-flex justify-content-end'>
           <button className='btn btn-primary' onClick={props.save}>
             Salvar
           </button>
           <button className='btn btn-secondary ml-2' onClick={props.clear}>
             Cancelar
           </button>
         </div>
       </div>
    </div>
   )

}
