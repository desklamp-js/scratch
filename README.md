# Desklamp
## Get Started

Desklamp is a React library which provides a state container and easy creation of routes. 

To get started, `npm install --save desklamp`. 

### Import What you Need

To set up your own application, start at your topmost component and import the module.

```
import { Desklamp, Container } from 'desklamp'; 
import React from 'react'; 
import ReactDOM from 'react-dom';
```
## Routes

Routing in Desklamp is meant to get you up and running with navigation and url updates, as well as browser history, as soon as possible. To create basic navigation, simply render your components inside the `Container` component Desklamp provides. For example, if you want to create routes for components `Home`, `Login`, `Signup` and `Posts`, first define these components as you normally would, then import them into your top component, and then nest them inside the `Container` component like so:

```
ReactDOM.render((
  <Container>
    <Home /> //creates route /home
    <Login />
    <Signup />
    <Posts />
  </Container>
), document.getElementById('app'));
``` 

## State Container

Similarly to the popular [Redux library](https://github.com/reactjs/redux), Desklamp allows you to keep your state in a single object which we call _appstate_. 
Unlike Redux, which constrains how you can interact with your application's state using actions and reducers, Desklamp gives you many options for state control. ~~Go nuts.~~

The _appstate_ is available to your components and functions.

`Desklamp.on` is the main function you will use to tell Desklamp about your application. This method takes three arguments, representing the initial state (must be an object), your update functions (must be an object), and a string representing the route you would like to be your initial view.
