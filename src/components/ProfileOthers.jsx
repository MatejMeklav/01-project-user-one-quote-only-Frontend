import React, { Component } from 'react';
import './components.css';
import Profile from './Profile';
import { useLocation } from 'react-router-dom';


export default class ProfileOthers extends Component {
    constructor(props){
        super(props);
    }
    render() {

        return (
          <Profile></Profile>
        );
    }
}
