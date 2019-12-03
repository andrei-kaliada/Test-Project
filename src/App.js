import React, { Component } from 'react';
import Main from './pages/Main/index';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Main />
                </div>
            </Router>   
        );
    }
}

export default App;