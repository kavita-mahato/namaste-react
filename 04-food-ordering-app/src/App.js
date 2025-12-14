import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);