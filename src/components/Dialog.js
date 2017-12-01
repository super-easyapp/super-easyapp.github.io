import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import iconbutton from '../images/iconbutton.svg';
import DragAndDrop from '../images/DragAndDrop.png';


/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

export default class DialogExampleSimple extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={false}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Upload"
                primary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <div className="FAB">
                    <a href="#" className="btn btn-lightBlue" label="Dialog" onClick={this.handleOpen}>
                        <span>Upload Tickets</span>
                        <img src={iconbutton} className="icon-button" alt="quixicon" />
                    </a>
                </div>

                <Dialog
                    title="Upload Tickets"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <img src={DragAndDrop} className="DragAndDrop" alt="DragAndDrop" />
                    <span className="instructions">
                        Tickets must be original e-ticket PDFs. We do not currently allow uploading scanned or photographed tickets.
                    </span>
                </Dialog>
            </div>
        );
    }
}