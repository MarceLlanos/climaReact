import React,{Component} from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
		return (
			<div className="app">
			<Header
				title = "Clima React"
			/>
			</div>
		);
	}
}

export default App;
