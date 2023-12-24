import react from 'react';
import '../css/boton.css'
function Boton(props) {
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '='); //Si no es un numero y no es un punto o un simbolo igual, es verdadero
    }
 
    //trimEnd() eliminar espacios del final
    return(
        <button 
            className={`botonContenedor ${esOperador(props.children) ? 'Operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClick(props.children)} >
            {props.children}
        </button >
    );
}

export default Boton;