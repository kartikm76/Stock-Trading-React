import React, { Component } from 'react';
import '../../styles/TableDisplay.css';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            usersList: [],
        };


    }

    componentDidMount() {
        const options = {
            headers: new Headers({
                'content-type': 'application/json',
                'Accept': 'application/json'
            }),
            type: "get",
            dataType: "json"
        };

        fetch('http://127.0.0.1:8000/users', options)
            .then(response => response.json())
            .then(data => {
                this.setState({ usersList: data })
                console.log("Headers: ", this.state.usersList)
            })
    }

    renderTableHeader() {
        // console.log("Main Headers: ", this.state.usersList[0])
        // let header = Object.keys(this.state.usersList[0])

        // return header.map((key, index) => {
        //     return <th key={index}>{key.toUpperCase()}</th>
        // })
        return (
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>SSN</th>
                <th>Is Active</th>
                <th>Profile Create Date</th>
            </tr>
        )
    }

    renderTableData() {
        return this.state.usersList.map((user) => {
            const { id, name, ssn, is_active, profile_create_date } = user //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{ssn}</td>
                    <td>{is_active}</td>
                    <td>{profile_create_date}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table id='tabledata'>
                    <tbody>
                        {this.renderTableHeader()}
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users