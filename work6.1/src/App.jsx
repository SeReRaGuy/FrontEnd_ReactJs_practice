import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu';
import Main from './Main';
import './styles.css';

const App = () => {
    return (
        <Router>
            <div>
                <Menu />
                <Main />
            </div>
        </Router>
    );
};

export default App;
