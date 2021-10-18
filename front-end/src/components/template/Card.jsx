import { Link } from 'react-router-dom';


export const Card = (props) => {
  return (
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body mb-3">
            <h5 className="card-title mb-3">Placa: {props.item.placa}</h5>
            <h6 className='card-subtitle mb-3'>Veiculo: {props.item.veichle}</h6>
            <p className="card-text">Cliente: {props.item.name}</p>
            <Link to={`/update/${props.item.id}`}>
                <button className='btn btn-warning mr-2' onClick={props.save}>
                 <i className='fa fa-pencil'> </i>
                </button>
              </Link>

              <button className='btn btn-danger mr-3' onClick={props.remove}>
                <i className='fa fa-trash'></i>
              </button>

              <Link to={`user/${props.item.id}`}>
                  <button className='btn btn-seta' onClick={props.save}>
                      <i className="fa fa-chevron-right"></i>
                  </button>
              </Link>
              </div>
          </div>
        </div>
  )}
