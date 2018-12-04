import React from 'react';

const Post = ({ id, title, created, content, clicked }) => {

    let timeString = new Date(created);
    return (
        <li>
            <div className="post">
                <div className="post-inside">
                    <h3 className="post-title">{title}</h3>
                    <time className="post-date">{timeString.toDateString()}</time>
                    <p className="excerpt">{content.substring(0, 150)}...</p>
                    <p className="post-link" onClick={clicked}>Read Post</p>
                </div>
            </div>
        </li>
    );
}

export default Post;