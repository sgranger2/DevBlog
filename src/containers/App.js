import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Posts from '../components/Posts';
import FullPost from '../components/FullPost';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const axios = require('axios');

class App extends Component {

  state = {
    posts: null,
    loading: true
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

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {this.state.loading ? <h1>Loading...</h1> :
            <Switch>
              <Route exact path="/DevBlog" render={props => <Posts {...props} posts={this.state.posts} />} />
              <Route exact path="/DevBlog/post/:id" render={props => <FullPost {...props} />} />
              <Route render={() => {
                return <p><strong>Page Not Found</strong></p>
              }} />
            </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
