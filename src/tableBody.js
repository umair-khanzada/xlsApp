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
            editableTD: null //can be object that contain rowIndex, cellIndex.
        };

        this.sort = this.sort.bind(this);
    }

    generateTd(arr, parentIndex) {
        return arr.map( (data, i) =>  <td key={i} onDoubleClick={this.showEditor.bind(this, parentIndex)}> {data} </td>);
    };

    sort(index){
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
                cell: e.target.cellIndex
            }
        });
    }

    render() {
        return (
            <div className="App">
                <div>
                    <table>
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
};
