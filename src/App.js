import React,{Component} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';

class App extends Component {

	state = {
		error : ''
	}

	componentDidMount() {
		this.setState({
			error : false
		})
	}

	datosConsulta = respuesta => {
		if(respuesta.ciudad === '' || respuesta.pais === ''){
			this.setState({error: true});
		}else{
			console.log('Todos los campos estan correctamente llenos');
		}
	}
  render() {
		// Componente condicional
		const error = this.state.error;
		let resultado;

		if(error){
			resultado = <Error mensaje = 'Ambos campos son obligatorios'/>
		}

		return (
			<div className="app">
				<Header
					title = "Clima React"
				/>
				<Formulario 
					datosConsulta = {this.datosConsulta}
				/>
				
				{resultado}
			</div>
		);
	}
}

export default App;
