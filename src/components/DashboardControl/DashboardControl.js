import React from 'react';

import './DashboardControl.css';

const dashboardControl = (props) => (
    <div className="DashboardControl" onClick={props.clicked}>
        {props.label}
    </div>
);

export default dashboardControl;
