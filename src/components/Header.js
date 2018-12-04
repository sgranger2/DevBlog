import React from 'react';

const Header = () => {
    return (
        <header className="App-header">
            <div className="header">
                <div className="left-header">
                    <h2>Shane's Serverless Daily Dev Blog</h2>
                </div>
                <div className="right-header">
                    <button className="btn btn-primary">Sign In</button>
                </div>
            </div>                
            <p className="subtitle"><em>This blog uses cloud functions and a cloud database instead of relying on a traditional back-end server and database</em></p>
        </header>
    );
}

export default Header;