import React, { Component } from 'react';
import '../../styles/TableDisplay.css';

class AccountBalance extends Component {
    constructor() {
        super();
        this.state = {
            AccountBalanceSeries: [],            
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

        fetch ('http://127.0.0.1:5000/api/account-balance/all', options)        
            .then(response => response.json())
            .then(data => {
                this.setState({ AccountBalanceSeries: data })
                console.log("Headers: ", this.state.AccountBalanceSeries)
            })        
    }

    renderTableHeader() {
        return (
            <tr>
               <th>Account ID</th>
               <th>As of Date</th>
               <th>Balance Amount ($)</th>               
            </tr>
         )
    }
    
    renderTableData() {
        return this.state.AccountBalanceSeries.map((AccountBalance) => {
           const { _account_id, _as_of_date, _balance_amount } = AccountBalance //destructuring
           return (
              <tr key={_account_id}>
                 <td>{_account_id}</td>
                 <td>{_as_of_date}</td>
                 <td>{_balance_amount}</td>                 
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

export default AccountBalance