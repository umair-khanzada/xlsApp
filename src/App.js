import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import component here.
import { TableBody } from './tableBody'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <TableBody tableData={[
          ["The Lord of the Rings", "J. R. R. Tolkien",
          "English", "1954–1955", "150 million"],
          ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
          "French", "1943", "140 million"],
          ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
          "English", "1997", "107 million"],
          ["And Then There Were None", "Agatha Christie",
          "English", "1939", "100 million"],
          ["Dream of the Red Chamber", "Cao Xueqin",
          "Chinese", "1754–1791", "100 million"]]} />
      </div>
    );
  }
}

App.propTypes = {
  tableHeading : React.PropTypes.array.isRequired
};
export default App;
