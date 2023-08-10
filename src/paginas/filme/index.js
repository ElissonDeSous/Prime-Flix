import './filme.css'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


import api from '../../services/api'

function Filmes()
{
    const {id} = useParams() 

    const [filmes , setFilmes] = useState([])
    const [loadFilmes , setLoadFilmes] = useState(true)
    useEffect(()=>{
        async function LoadFilme(){
            await api.get(`/movie/${id}`,{
               params:{
                  api_key:'92db0ae4a900e9cac8e19dfa064ba8da',
                  language: 'pt-br',
               },
           })
   
           .then((Response)=>{
           setFilmes(Response.data);
           setLoadFilmes(false)
            
           })
           .catch(()=>{
               console.log('filme nao encontrado')
           })
       }
       LoadFilme()
    },[])

   if(loadFilmes)
   {
      return(
        <div className='load'>
        <h2>Carregando filme...</h2>
        </div>
      )
   }

 
    
    return(
        <div className='filme-info'>
            <h1>{filmes.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path} `} alt = {filmes.title} />

            <h3>Sinopse</h3>
            <span className='sinopse'>{filmes.overview}</span>

            <p>avaliação: {filmes.vote_average}/10</p>
         <div className='botoes'>
            <input className='Botao' type='Submit' value='salvar'/>
           <Link><input className='Botao' type='Submit' value='Trailer'/></Link> 
         </div>   
       </div>
    )
}
export default Filmes