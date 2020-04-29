import React, { Component } from 'react';
import '../../styles/TableDisplay.css';

class TradeActivity extends Component {
    constructor() {
        super();
        this.state = {
            TradeActivityList: [],            
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

        fetch ('http://127.0.0.1:5000/api/trade-activity/all', options)        
            .then(response => response.json())
            .then(data => {
                this.setState({ TradeActivityList: data })
                console.log("Headers: ", this.state.TradeActivityList)
            })        
    }

    renderTableHeader() {
        return (
            <tr>               
               <th>Account ID</th>
               <th>Stock Symbol</th>
               <th>Transaction Quantity</th>
               <th>Transaction Price</th>
               <th>Transaction Type</th>
               <th>Transaction Date</th>
            </tr>
         )
    }
    
    renderTableData() {
        // index is being used to define a unique key as none of the attributes being required
        // will qualify for a natural key
        return this.state.TradeActivityList.map((TradeActivity, index) => {
           const { _account_id, _stock_symbol, _transaction_qty, _transaction_price, _transaction_type_code, _transaction_date } = TradeActivity //destructuring           
           return (
              <tr key={index}>
                 <td>{_account_id}</td>
                 <td>{_stock_symbol}</td>
                 <td>{_transaction_qty}</td>
                 <td>{_transaction_price}</td>
                 <td>{_transaction_type_code}</td>
                 <td>{_transaction_date}</td>
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

export default TradeActivity