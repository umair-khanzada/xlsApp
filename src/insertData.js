/**
 * Created by UmairAhmed on 2/5/2017.
 */

import React, { Component } from 'react';

export class InsertData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newBook: {
                book: '',
                author: '',
                language: '',
                publish: '',
                sale: ''
            }
        };

        //bind this reference.
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let newBook = this.state.newBook;
        newBook[e.target.name] = e.target.value;

        this.setState({
            newBook
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.add(Object.values(this.state.newBook));
        this.setState({
            newBook: {
                book: '',
                author: '',
                language: '',
                publish: '',
                sale: ''
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="book" value={this.state.newBook.book} required={true} />
                    <input type="text" onChange={this.handleChange} name="author" value={this.state.newBook.author} required={true} />
                    <input type="text" onChange={this.handleChange} name="language" value={this.state.newBook.language} required={true} />
                    <input type="text" onChange={this.handleChange} name="publish" value={this.state.newBook.publish} required={true} />
                    <input type="text" onChange={this.handleChange} name="sale" value={this.state.newBook.sale} required={true} />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

InsertData.propTypes = {
    add: React.PropTypes.func.isRequired
};
