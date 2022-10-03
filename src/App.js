import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";


class App extends Component {

    scroll = () =>{
        const elemento = document.querySelector('.jumbotron');
        elemento.scrollIntoView('smooth','start')
    }
    
    
    state = { 
        termino : '',
        imagenes : [],
        pagina: '',
    }

    paginaAnterior = () => {
        //Leer el State de la pagina actual
        let pagina = this.state.pagina;
        
        //Leer si la pagina 1, ya no ir hacia atras
        if (pagina === 1 ) return null;

        //Restar 1 a la pagina actual
        pagina -= 1;

        //Agregar el cambio al State
        this.setState({pagina}, () => {
            this.consultarApi();
            this.scroll();
        });

        //console.log(pagina);

    }

    paginaSiguiente = () => {

        //Leer el State de la pagina actual
        let pagina = this.state.pagina;
        
        //Sumar 1 a la pagina actual
        pagina += 1;

        //Agregar el cambio al State
        this.setState({pagina}, () => {
            this.consultarApi();
            this.scroll();
        });


        //console.log(pagina);
    }

    consultarApi = () => {
        const termino = this.state.termino;
        const pagina = this.state.pagina;
        const url = `https://pixabay.com/api/?key=30263956-82e5b30a848ac720de6ef8d05&q=${termino}&page=${pagina}`;

            //console.log (url);
            fetch (url)
            .then(respuesta => respuesta.json())
            .then(resultado => this.setState({imagenes: resultado.hits}))
         }

    datosBusqueda = (termino) => {
                    this.setState (
                        {termino : termino,
                        pagina : 1}, 
                    () => { this.consultarApi();}
                    ) 
    }

    render () {
        return (
            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center"><strong>Buscador de Imagenes</strong></p>
                    <Buscador 
                        datosBusqueda={this.datosBusqueda}/>

                </div>
                
                <div className="row justify-content-center">
                <Resultado 
                imagenes={this.state.imagenes}
                paginaAnterior={this.paginaAnterior}
                paginaSiguiente={this.paginaSiguiente}
                
                />
                </div>
                
            </div>
        );
    }
}




export default App;