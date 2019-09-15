import React,{Component} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';


class App extends Component {

	state = {
		error : '',
		consulta : {},
		resultado : {}
	}

	//Metodo que revisa el state, una vez actualizado mandara a consultar la api
	componentDidUpdate(prevProvs, prevState) {
		if(prevState.consulta !== this.state.consulta){
			this.consultarApi();
		}
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
			this.setState({
				consulta :respuesta, 
				error : false})
		}
	}

	consultarApi = () => {
		const {ciudad, pais} = this.state.consulta;
		if(!ciudad || !pais) return null;

		const appid = 'bf35dd2f96229c44a5203ef2e283288e';
		let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;
		
		// query con fetch api
		fetch(url).then(respuesta => {
			// Tenemos que ver en que modo puede venir la respuesta en algunos casos se puede retornar como JSON o como una cadena
			return respuesta.json();
		}).then(datos => {
			// Verifica si ya se esta imprimiendo la respuesta y se agrega al state
			this.setState({resultado : datos});
		}).catch(error => {
			//En caso de que haya un error con la api se finaliza con el catch para poder debugear
			console.log(error);
		});
	}

  render() {
		// Componente condicional
		const error = this.state.error;
		let resultado;

		if(error){
			resultado = <Error mensaje = 'Ambos campos son obligatorios'/>
		}else{
			resultado = <Clima resultado = {this.state.resultado}/>
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
