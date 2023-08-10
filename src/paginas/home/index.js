import{useEffect,useState} from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'
function Home ()
{
    // variavel onde vai ser guardado os filmes
    const [filmes,setFilmes] = useState([])
    const [load, setLoad] = useState(true)

    // função o
    useEffect(() => {
        // função pra fazer o carregamento dos filmes
        async function loadFilmes(){
          const  Response = await api.get("movie/now_playing",{
            params:{
             api_key: "92db0ae4a900e9cac8e19dfa064ba8da",
             language: "pt-br",
             page:1,
          }})

          setFilmes(Response.data.results.slice(0,10))
          setLoad(false)
        }
        loadFilmes()
        
    },[])
  

  if(load)
  {
    return(
      <div className='load'>
           <h2>Carregando filme...</h2>
      </div>
    )
  }

   return(
    <div className='caontainer'>
    <div className='lista-filmes'>
       {filmes.map((filme)=>{
        return(
            <article key={filme.id}>
                <h3>{filme.title}</h3>
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt = {filme.title}/>
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
        )
       })}
    </div>

</div>
   )
}
export default Home