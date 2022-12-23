import React from 'react';

import './Progressbar.css';

export const Progressbar = props => {
    return <div
        className="Progressbar"
        style={{
        width: `${props.percentage}%`}
        }
    >

        <p>{props.percentage}%</p>

    </div>
}