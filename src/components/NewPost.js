import React from 'react';
import { firebaseAuth } from './Firebase/constants';

const axios = require('axios');

class NewPost extends React.Component {

    state = {
        title: "",
        content: "",
        token: ""
    }

    componentDidMount() {
        firebaseAuth().currentUser.getIdToken().then((token) => {
            this.setState({ token: token })
        })
    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value })
    }

    handleContentChange = (event) => {
        this.setState({ content: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://us-central1-exampleblog-538df.cloudfunctions.net/posts', {
            title: this.state.title,
            content: this.state.content,
            token: this.state.token
        });
        // window.location.reload();
        this.props.history.push({
            pathname: '/DevBlog'
        });
    }

    render() {
        return (
            <div className="newPost">
            <h2>New Post</h2>
                <form className="newPost-form" onSubmit={this.handleSubmit}>
                    <label className="newPost-title">
                        Title:
                <input  type="text" onChange={this.handleTitleChange} />
                    </label>
                    <label className="newPost-content">
                        Content:
                <textarea className="newPost-content-text" value={this.state.value} onChange={this.handleContentChange} />
                    </label>
                    <input className="btn btn-primary newPost-button" type="submit" value="Submit" />
                </form>
            </div>

        );
    }
}

export default NewPost;