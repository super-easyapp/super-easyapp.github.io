import React from 'react';
import DialogExampleSimple from './Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const HeaderTabs = () => (
    <div className="Header-Tabs">
        <ul>
            <li className="active">For Sale</li>
            <li>Sold</li>
            <li>Activity</li>
            <li>•••</li>
        </ul>

        <MuiThemeProvider>
            <DialogExampleSimple />
        </MuiThemeProvider>

    </div>
);

export default HeaderTabs;