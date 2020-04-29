import React from 'react';

import './DataLabel.css';

const dataLabel = (props) => (
    <div className="DataLabel">
        {props.value}
    </div>
);

export default dataLabel;