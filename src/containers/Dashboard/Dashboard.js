import React, { Component } from 'react';

import DashboardControl from '../../components/DashboardControl/DashboardControl';
import Stocks from '../Stocks/Stocks';
import Users from '../Users/Users';
import StockHolding from '../StockHolding/StockHolding';
import TradeActivity from '../TradeActivity/TradeActivity';
import AccountBalance from '../AccountBalance/AccountBalance';
import DashLabel from '../../components/DataLabel/DataLabel';

class Dashboard extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            selectedControl: '',
            label: ''
        };
      }
    
    dashboardControlSelectionHandler = ( action, value ) => {
        this.setState({
            selectedControl: action,
            label: value
        });
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
                <DashboardControl label="Stocks List" clicked={() => this.dashboardControlSelectionHandler( 'ALL_STOCKS', 'Stock Listing' )} />                
                <DashboardControl label="Stock Holding" clicked={() => this.dashboardControlSelectionHandler( 'STOCK_HOLDING', 'Stocks Portfolio By User' )}  />
                <DashboardControl label="Trade Activity" clicked={() => this.dashboardControlSelectionHandler( 'TRADE_ACTIVITY', 'Trade Activity Log')}  />
                <DashboardControl label="Account Balance" clicked={() => this.dashboardControlSelectionHandler( 'ACCOUNT_BALANCE', 'Account Balance')}  />                    
                <DashboardControl label="All Users" clicked={() => this.dashboardControlSelectionHandler( 'ALL_USERS', 'Users Profile')} />
                <DashLabel value={this.state.label} />
                {output}
            </div>
        );
    }
}

export default Dashboard;