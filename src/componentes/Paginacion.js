import React, {Component} from "react";

const Paginacion = props => {

    return (
        <div className="py-3">
            <button onClick={props.paginaAnterior} className="btn btn-info mr-1" type="button"> Anterior &larr; </button>
            <button onClick={props.paginaSiguiente} className="btn btn-info" type="button"> Siguiente &rarr; </button>
        </div>
    )

}


export default Paginacion;