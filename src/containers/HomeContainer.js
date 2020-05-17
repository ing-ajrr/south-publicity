import React, { Component } from 'react';
import AppFrame from './../components/AppFrame';
import Home from './../components/Home';

class HomeContainer extends Component {
    render(){
        return (
            <AppFrame body={<Home/>}/>    
        );
    }
};

export default HomeContainer;