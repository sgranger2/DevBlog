import React from 'react';
import {Link} from 'react-router-dom';

class Posts extends React.Component {

    render() {
        const newProps = this.props.location.state;

        let timeString = new Date(newProps.created);

        return (
            <div className="fullpost">
                <div className="fullpost-inside">
                    <h3 className="fullpost-title">{newProps.title}</h3>
                    <time className="fullpost-date">{timeString.toDateString()}</time>
                    <p className="fullpost-content">{newProps.content}</p>
                    <Link className="backButton" to="/">Back</Link>
                </div>
            </div>
        );
    }
}

export default Posts;