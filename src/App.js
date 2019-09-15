import React,{Component} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';

class App extends Component {

	state = {
		error : '',
		consulta : {}
	}

	componentDidUpdate() {
		this.consultarApi();
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
			this.setState({consulta :respuesta})
		}
	}

	consultarApi = () => {
		const {ciudad, pais} = this.state.consulta;
		if(!ciudad || !pais) return null;

		const appid = '';
		let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;
		
		// query con fetch api

		//leer la url y agregar la api key

		//Consultar con fetch
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
