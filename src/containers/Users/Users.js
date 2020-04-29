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
            headers: new Headers({  'content-type': 'application/json',
                                    'Accept': 'application/json'
                                }),
            type: "get",
            dataType: "json"
        };        

        fetch ('http://127.0.0.1:5000/api/all-users', options)        
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
            </tr>
         )
    }
    
    renderTableData() {
        return this.state.usersList.map((user) => {
           const { _id, _name, _ssn, _isActive } = user //destructuring
           return (
              <tr key={_id}>
                 <td>{_id}</td>
                 <td>{_name}</td>
                 <td>{_ssn}</td>
                 <td>{_isActive}</td>
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