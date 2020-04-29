import React, { Component } from 'react';
import '../../styles/TableDisplay.css';

class Stocks extends Component {
    constructor() {
        super();
        this.state = {
            Stocks: [],            
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

        fetch ('http://127.0.0.1:5000/api/stocks-list/all', options)        
            .then(response => response.json())
            .then(data => {
                this.setState({ Stocks: data })
                console.log("Headers: ", this.state.Stocks)
            })        
    }

    renderTableHeader() {        
        return (
            <tr>
               <th>Stock Symbol</th>
               <th>Stock Name</th>
               <th>Last Price ($)</th>               
            </tr>
         )
    }
    
    renderTableData() {
        return this.state.Stocks.map((Stocks) => {
           const { _stock_symbol, _stock_name, _last_price } = Stocks //destructuring
           return (
              <tr key={_stock_symbol}>
                  <td>{_stock_symbol}</td>
                 <td>{_stock_name}</td>
                 <td>{_last_price}</td>
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

export default Stocks