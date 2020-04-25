import React, { Component } from 'react';
import '../../styles/TableDisplay.css';

class StockHolding extends Component {
    constructor() {
        super();
        this.state = {
            stockHoldings: [],            
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

        fetch ('http://127.0.0.1:5000/api/holding/account/TRD_001', options)        
            .then(response => response.json())
            .then(data => {
                this.setState({ stockHoldings: data })
                console.log("Headers: ", this.state.stockHoldings)
            })        
    }

    renderTableHeader() {        
        return (
            <tr>
               <th>User ID</th>
               <th>Account ID</th>
               <th>Stock Symbol</th>
               <th>Purchase Price</th>               
            </tr>
         )
    }
    
    renderTableData() {
        return this.state.stockHoldings.map((stockholding) => {
           const { _user_id, _account_id, _stock_symbol, _purchase_price } = stockholding //destructuring
           return (
              <tr key={_user_id}>
                 <td>{_user_id}</td>
                 <td>{_account_id}</td>
                 <td>{_stock_symbol}</td>
                 <td>{_purchase_price}</td>
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

export default StockHolding