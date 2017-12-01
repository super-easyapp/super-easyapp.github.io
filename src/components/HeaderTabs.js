import React from 'react';
import DialogExampleSimple from './Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';



const HeaderTabs = () => (
    <div className="Header-Tabs">
        <ul className="Header-Tabs-ListItems">
            <UserList />
        </ul>

        <MuiThemeProvider>
            <DialogExampleSimple />
        </MuiThemeProvider>

        <UserDetails />

    </div>
);

export default HeaderTabs;