import React from 'react';

const Header = (props) => {
    let isSignedIn = props.signedIn;
    return (
        <header className="App-header">
            <div className="header">
                <div className="left-header">
                    <h2>Shane's Serverless Daily Dev Blog</h2>
                </div>
                <div className="right-header">
                    {isSignedIn ? 
                    <button className="btn btn-primary" onClick={props.newPostClicked}>New Post</button> : 
                    <button className="btn btn-primary" onClick={props.adminClicked}>Admin</button>}     
                </div>
            </div>                
            <p className="subtitle"><em>This blog uses cloud functions and a cloud database instead of relying on a traditional back-end server and database</em></p>
        </header>
    );
}

export default Header;