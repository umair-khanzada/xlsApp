import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import component here.
import { TableBody } from './tableBody'
import { InsertData } from './insertData'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tableData: [
        ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954–1955", "150 million"],
        ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
        ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
        ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
        ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754–1791", "100 million"]
      ],
      preData: [
          ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954–1955", "150 million"],
          ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
          ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
          ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
          ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754–1791", "100 million"]
      ],
      query: ''
    };

    //bind this reference.
    this.updateData = this.updateData.bind(this);
    this.addData = this.addData.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  updateData(updatedData, index, parentIndex) {
      let tableData = this.state.tableData;
      tableData[parentIndex][index] = updatedData;

      this.setState({
          tableData,
          preData: tableData
      })
  }

  addData(newData) {
      let updatedData = [newData, ...this.state.tableData];
      this.setState({
          tableData: updatedData,
          preData: updatedData
      })
  }

  searchHandler(e) {
      let preData, filterData;

      if(e.target.value){

          preData = this.state.preData;
          filterData = preData.filter((arr) => {
              let convertIntoString = arr.join(' ').toLowerCase();
              return convertIntoString.indexOf(e.target.value.toLowerCase()) >= 0 && arr;
          });

          this.setState({
              query: e.target.value,
              tableData: filterData
          });

      }
      else{

          preData = this.state.preData;
          this.setState({
              query: e.target.value,
              tableData: preData
          });
      }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React xls App</h2>
            <form className="form-inline">
                <div className="form-group">
                    <input placeholder="Search" type="text" className="form-control" id="search" vlaue={this.state.query} onChange={this.searchHandler} />
                </div>
            </form>
        </div>
        <InsertData add={this.addData}/>
        <TableBody tableData={this.state.tableData} updateRecord={this.updateData} />
      </div>
    );
  }
}

App.propTypes = {
  tableHeading : React.PropTypes.array.isRequired
};
export default App;
