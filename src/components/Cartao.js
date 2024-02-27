import MinhaFoto from "./MinhaFoto"
import Paragrafo from "./Paragrafo"
import Titulo from "./Titulo"

function Cartao (props){
    return(
        <div >
            <Titulo 
                Titulo ={props.Titulo}
                Subtitulo={props.Subtitulo}
            />
            <MinhaFoto
                Foto={props.Foto}
            />
            <Paragrafo/>
        </div>
    )
}
export default Cartao