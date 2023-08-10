import {Link} from 'react-router-dom'
import './erro.css'
function erro()
{
    return(
        <div className="not_found">
           <h1>404</h1>
           <h2>pagina nao encontrada</h2>
           <Link to = '/'>Acesse a pagina principal</Link>
        </div>
    )
}
export default erro