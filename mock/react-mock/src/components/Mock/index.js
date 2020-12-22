import React, { Component } from 'react'
import axios from 'axios';
import './dataset'
// import a from './mock'
// import './mock'

// require('./mock');

export default class Mock extends Component {

    componentDidMount() {
        axios.get('/dataset/user/mutations/')
        // axios.get('/mock/mocklist')
            .then(function (res) {
                // handle success
                console.log(res);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {

        return (
            <div>
                test
            </div>
        )
    }
}
