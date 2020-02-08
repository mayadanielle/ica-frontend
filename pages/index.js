import React, {Component,Fragment} from 'react';
import {Head} from '../components';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Head title="Welcome to Home Page" />

                <div className="container">
                <h1>Welcome to home page</h1>
                </div>
            </Fragment>
        )
    };
};

export default HomePage;