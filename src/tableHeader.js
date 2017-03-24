/**
 * Created by UmairAhmed on 2/5/2017.
 */


import React, { Component } from 'react';

export class TableHeader extends Component {

    constructor(props){
        super(props);

        this.state = {
            sortBy: this.props.sortBy
        }
    }

    //lifecycle hooks.
    componentWillReceiveProps(newProps){

        this.setState({
            sortBy: newProps.sortBy
        })
    }

    sorting(index) {
        this.props.sortMethod(index)
    }

    headerIcon(index){
        if(index === this.props.sortBy){
            return <i className="fa fa-sort-asc" aria-hidden="true"></i>
        }
    }

    render() {
        return (
        <thead className="thead-default">
            <tr>
                {
                    this.props.tableHeading.map( (obj, index) =>
                        <th className="text-center" key={index} onClick={this.sorting.bind(this, index)}>
                            { obj }
                            {this.headerIcon(index)}
                        </th>
                    )
                }
            </tr>
        </thead>
        );
    }
}

TableHeader.propTypes = {
    tableHeading : React.PropTypes.array.isRequired,
    sortMethod : React.PropTypes.func.isRequired,
    sortBy : React.PropTypes.number.isRequired
};
