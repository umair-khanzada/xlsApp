/**
 * Created by UmairAhmed on 2/5/2017.
 */


import React, { Component } from 'react';

//import component here.
import { TableHeader } from './tableHeader'

export class TableBody extends Component {

    constructor(props){
        super(props);

        this.state ={
            tableData: this.props.tableData,
            sortBy: -1,
            editableTD: null //can be object that contain rowIndex, cellIndex, cellText.
        };

        //binding this reference.
        this.sort = this.sort.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //life cycle hooks.
    componentWillReceiveProps(newProps){
        this.setState({
            tableData: newProps.tableData
        })
    }

    generateTd(arr, parentIndex) {
        return arr.map( (data, i) =>  <td key={i} onDoubleClick={this.showEditor.bind(this, parentIndex)}>{this.editData(data, i, parentIndex)}</td>);
    }

    handleChange(e) {
        let editableTD = this.state.editableTD;
        editableTD.text = e.target.value;

        this.setState({
            editableTD
        })
    }

    handleSubmit(index, parentIndex, e) {
        e.preventDefault();

        this.props.updateRecord(this.state.editableTD.text, index, parentIndex);
        this.setState({
            editableTD: null
        })
    }

    editData(data, index, parentIndex) {
        let edit = this.state.editableTD;
        if (edit && edit.row === parentIndex && edit.cell === index) {
            return (
                <form onSubmit={this.handleSubmit.bind(this, index, parentIndex)}>
                    <input type="text" value={this.state.editableTD.text} onChange={this.handleChange} required={true} />
                </form>
            )
        }
        return data
    }

    sort(index) {
        let tableData = this.state.tableData;
        tableData.sort((a, b) => a[index] > b[index] ? 1 : -1);
        this.setState({
            tableData,
            sortBy: index
        });
    }

    showEditor(parentIndex, e) {
        this.setState({
            editableTD: {
                row: parentIndex,
                cell: e.target.cellIndex,
                text: this.state.tableData[parentIndex][e.target.cellIndex]
            }
        });

    }

    render() {
        return (
            <div className="App">
                <div>
                    <table className="table table-bordered table-hover">
                        <TableHeader tableHeading={["Book", "Author", "Language", "Published", "Sales"]} sortMethod={this.sort} sortBy={this.state.sortBy}/>
                        <tbody>
                        {
                            this.state.tableData.map( (subArray, index) => {
                               return <tr key={index}>
                                   {
                                       this.generateTd(subArray, index)
                                   }
                               </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

TableBody.propTypes = {
    tableData : React.PropTypes.array.isRequired,
    updateRecord : React.PropTypes.func.isRequired
};
