import React from 'react';
import {firebaseAuth} from './Firebase/constants';

const axios = require('axios');

class NewPost extends React.Component {

    state = {
        title: "",
        content: "",
        token: ""
    }

    componentDidMount() {
        firebaseAuth().currentUser.getIdToken().then((token) => {
            this.setState({token: token})
            console.log(token);
        })
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value})
    }

    handleContentChange = (event) => {
        this.setState({content: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/exampleblog-538df/us-central1/posts', {
            title: this.state.title,
            content: this.state.content,
            token: this.state.token
        })
        // window.location.reload();
        this.props.history.push({
            pathname: '/'
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Title:
                <input type="text" onChange={this.handleTitleChange}/>
            </label>
              <label>
                Content:
                <textarea value={this.state.value} onChange={this.handleContentChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
    }
}

export default NewPost;