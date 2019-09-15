import React, { Component } from 'react'

export default class Formulario extends Component {

  //Crear los refs
  ciudadRef = React.createRef();
  paisRef = React.createRef();

  buscarClima = (e) => {
    e.preventDefault();

    //crear el objeto y leer los refs
    const respuesta = {
      ciudad : this.ciudadRef.current.value,
      pais : this.paisRef.current.value
    }

    // enviar por props
    this.props.datosConsulta(respuesta);

    // opcional resetar el formulario

  }
  render() {
    return (
      <div className = "contenedor-form">
        <div className = "container">
          <div className = "row">
            <form onSubmit = {this.buscarClima}>
              <div className = "input-filed col s12 m8 l4 offset-m2">
                <input id = "ciudad" type = "text" ref = {this.ciudadRef}/>
                <label htmlFor = "ciudad" >Ciudad:</label>
              </div>
              <div className = "input-file col s12 m8 l4 offset-m2">
                <select ref = {this.paisRef} id = 'pais'>
                  <option value = "" defaultValue>Elige un pais</option>
                  <option value = "AR">Argentina</option>
                  <option value = "CO" >Colombia</option>
                  <option value = "CR" >Costa Risa</option>
                  <option value = "ES" >España</option>
                  <option value = "US" >Estados Unidos</option>
                  <option value = "MX" >Mexico</option>
                  <option value = "PE" >Peru</option>
                  <option value = "BO" >Bolivia</option>
                </select>
                <label htmlFor= "pais" >Pais: </label>
              </div>
              <div className = "input-field col s12 m8 l4 buscador">
                <input type = "submit" className = "waves-effect waves-light btn-large yellow accent-4" value = "Buscar"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
