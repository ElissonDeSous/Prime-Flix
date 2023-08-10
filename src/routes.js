import{BrowserRouter,Routes , Route} from 'react-router-dom'
import Home from './paginas/home'
import Filme from './paginas/filme'
import Header from './componente/header'
import Erro from './paginas/erro'



function RoutesApp()
{
    return(
       <BrowserRouter>
         <Header/>
       <Routes>
      
        <Route path='/' element = {<Home/>}/>
        <Route path='/filme/:id' element = {<Filme/>}/>
        <Route path='*' element = {<Erro/>}/>
        
        </Routes>
       
       </BrowserRouter>
    )
}
export default RoutesApp