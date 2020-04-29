import React, { Component } from 'react';

import DashboardControl from '../../components/DashboardControl/DashboardControl';
import Stocks from '../Stocks/Stocks';
import Users from '../Users/Users';
import StockHolding from '../StockHolding/StockHolding';
import TradeActivity from '../TradeActivity/TradeActivity';
import AccountBalance from '../AccountBalance/AccountBalance';

class Dashboard extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            selectedControl: ''
        };
      }
    
    dashboardControlSelectionHandler = ( action ) => {
        this.setState({selectedControl: action});
    }

    render () {
        const selectedControl = this.state.selectedControl;
        let output
        switch ( selectedControl ) {
            case 'ALL_STOCKS':                
                 output = <Stocks />;
                 break;                 
            case 'ALL_USERS':                
                 output = <Users />;
                 break;
            case 'STOCK_HOLDING':
                output = <StockHolding />;
                break;
            case 'TRADE_ACTIVITY':
                output = <TradeActivity />;
                break;
            case 'ACCOUNT_BALANCE':
                output = <AccountBalance />;
                break;
            default:
                break;
        }

        return (            
            <div>
                <DashboardControl label="Stocks List" clicked={() => this.dashboardControlSelectionHandler( 'ALL_STOCKS' )} />                
                <DashboardControl label="Stock Holding" clicked={() => this.dashboardControlSelectionHandler( 'STOCK_HOLDING' )}  />
                <DashboardControl label="Trade Activity" clicked={() => this.dashboardControlSelectionHandler( 'TRADE_ACTIVITY')}  />
                <DashboardControl label="Account Balance" clicked={() => this.dashboardControlSelectionHandler( 'ACCOUNT_BALANCE')}  />                                
                <DashboardControl label="All Users" clicked={() => this.dashboardControlSelectionHandler( 'ALL_USERS' )} />
                {output}
            </div>
        );
    }
}

export default Dashboard;