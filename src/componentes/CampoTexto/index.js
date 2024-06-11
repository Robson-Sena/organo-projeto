import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderMpdificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
                </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderMpdificada}/>
        </div>
    )
}

export default CampoTexto