import React,{Component} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

class App extends Component {

	state = {
		error : false
	}

	componentDidMount() {
		this.setState({
			error : true
		})
	}

	datosConsulta = respuesta => {
		if(respuesta.ciudad === '' || respuesta.pais === ''){
			console.log('Hay un campo vacio')
		}else{
			console.log('Todos los campos estan correctamente llenos');
		}
	}
  render() {
		return (
			<div className="app">
				<Header
					title = "Clima React"
				/>
				<Formulario 
					datosConsulta = {this.datosConsulta}
				/>
			</div>
		);
	}
}

export default App;
