import React, {Component} from 'react';
import './App.css';

import DataPage from './pages/DataPage'

class App extends Component {
    render() {
    return (
      <div className="App">
        <h1>Summation of all fuels used for electricity generation</h1>
        <DataPage />
      </div>
    );
  }
}
export default App;
