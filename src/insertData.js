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
            <div className="insert-form-parent">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input placeholder="Book" type="text" className="form-control" onChange={this.handleChange} name="book" value={this.state.newBook.book} required={true} />
                    </div>
                    <div className="form-group">
                        <input placeholder="Author" type="text" className="form-control" onChange={this.handleChange} name="author" value={this.state.newBook.author} required={true} />
                    </div>
                    <div className="form-group">
                        <input placeholder="Language" type="text" className="form-control" onChange={this.handleChange} name="language" value={this.state.newBook.language} required={true} />
                    </div>
                    <div className="form-group">
                        <input placeholder="Published" type="text" className="form-control" onChange={this.handleChange} name="publish" value={this.state.newBook.publish} required={true} />
                    </div>
                    <div className="form-group">
                        <input placeholder="Sales" type="text" className="form-control" onChange={this.handleChange} name="sale" value={this.state.newBook.sale} required={true} />
                    </div>
                    <button className="btn btn-success mar" type="submit">Add</button>
                </form>
            </div>
        );
    }
}

InsertData.propTypes = {
    add: React.PropTypes.func.isRequired
};
