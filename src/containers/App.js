import React, { Component } from 'react';
import './App.css';
import '../queries.css';
import Header from '../components/Header';
import Posts from '../components/Posts';
import FullPost from '../components/FullPost';
import NewPost from '../components/NewPost';
import { Route, Switch } from 'react-router-dom';
import { loginWithGoogle } from '../components/Firebase/auth';
const axios = require('axios');

class App extends Component {

  state = {
    posts: null,
    loading: true,
    signedIn: false,
    wrongUser: false
  }

  componentDidMount() {
    axios.get('https://us-central1-exampleblog-538df.cloudfunctions.net/posts')
    // axios.get('http://localhost:5000/exampleblog-538df/us-central1/posts')
      .then((response) => {
        this.setState({ posts: Object.entries(response.data).reverse(), loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleGoogleSignIn = () => {
    loginWithGoogle().then(result => {
      console.log(result);
      if (result.user.email === "shaneg457@gmail.com") {
        this.setState({ signedIn: true });
      }
      else alert("Wrong user!"); 
    });
  }

  handleNewPost = () => {
    this.props.history.push({
      pathname: '/DevBlog/newPost'
    })
  }

  render() {
    return (

      <div className="App">
        <Header signedIn={this.state.signedIn} adminClicked={this.handleGoogleSignIn} newPostClicked={this.handleNewPost} />
        {this.state.loading ? <h1>Loading...</h1> :
          <Switch>
            <Route exact path="/DevBlog" render={props => <Posts {...props} posts={this.state.posts} />} />
            <Route exact path="/DevBlog/post/:id" render={props => <FullPost {...props} />} />
            <Route exact path="/DevBlog/newpost" component={NewPost} />
            <Route render={() => {
              return <p><strong>Page Not Found</strong></p>
            }} />
          </Switch>
        }
      </div>

    );
  }
}

export default App;
