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

        {/*

         import iconbutton from '../images/iconbutton.svg';

         <div className="FAB">
            <a href="#" className="btn btn-lightBlue">
                <span>Upload Tickets</span>
                <img src={iconbutton} className="icon-button" alt="quixicon" />
            </a>
        </div>*/}

    </div>
);

export default HeaderTabs;