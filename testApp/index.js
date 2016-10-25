import { Desklamp, Container } from 'desklamp';
import React from 'react';
import ReactDOM from 'react-dom';

// Normal React components
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Nav from './components/Nav'; // custom Nav component that you create
// (See Nav documentation below)

// Create an initial state object
const initState = {
  posts: [],
};

// Create an object with your custom functions as its methods.
const funcs = {};

ReactDOM.render((
  // Child components here become your routable urls
  <Container>
    <Home name="home" /> // optional name property for custom route/url name
    <CreatePost /> // by default, Desklamp will name your route after your component
  </Container>
), document.getElementById('app'));

funcs.createPost = (post) => {
  alert(post);
};

// Initialize Desklamp below your ReactDOM.render
// Pass in your initial state object, funcs object, and your imported Nav
Desklamp.on(initState, funcs, Nav);
