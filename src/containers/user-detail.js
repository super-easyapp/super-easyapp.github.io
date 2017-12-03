import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuixCard from '../images/quixCard2.png';


/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (
                <div>
                    <img src={QuixCard} className="QuixCard" alt="QuixCard" />
                </div>
            );
        }
        return (
            <div>
                <img className="QuixCard" src={this.props.user.thumbnail} />
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
