import React from 'react';
import Post from './Post';

class Posts extends React.Component {

    handlePostClick = (post) => {
        this.props.history.push({
            pathname: '/post/' + post[0], 
            state: {title: post[1].title, created: post[1].created, content: post[1].content}
        })
    }

    render() {
        const posts = this.props.posts;
        const blogPosts = posts.map((post) => {
            return <Post key={post[0]} id={post[0]} title={post[1].title} created={post[1].created} content={post[1].content} clicked={() => this.handlePostClick(post)} />
        });

        return (
            <ul className="posts">
                {blogPosts}
            </ul>
        );
    }
}

export default Posts;