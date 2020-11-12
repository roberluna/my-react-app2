import React, {useState} from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0)

    const aumentar = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            <p>{ contador }</p>
            <button onClick={ () => aumentar() }> Agregar </button>
        </div>
    )
}

export default Contador

