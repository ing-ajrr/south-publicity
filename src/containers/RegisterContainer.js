import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import { insertUser } from './../actions/users/insert';
import AppFrame from '../components/AppFrame';
import Register from '../components/Register';


class RegisterContainer extends Component {
    handleSubmit = values => {
        return this.props.insertUser(values).then( r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }
    render() {
        const newUser = {
            "name": "",
            "lastName": "",
            "email": "",
            "company": "",
            "cell": "",
            "id": ""
          };
        return (
            <AppFrame {...newUser} 
                body={
                    <Register onSubmit={this.handleSubmit}
                        onSubmitSuccess={this.handleOnSubmitSuccess}
                    />
                }
            />
        );
    }
}

RegisterContainer.propTypes = {
    insertUser: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertUser })(RegisterContainer));
