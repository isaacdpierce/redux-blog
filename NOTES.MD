# React Router

- **React Router** is the basis for single page applications - SPA
- No longer rendering different HTML docs
- Instead we are using javascript to change the elements the user sees on the screen
- the user only ever loads 1 html doc. - we essentially trick the user into thinking the loaded another page.

Behind the scenes:

- React router has its own History library package

Steps for React Router:

  1) User interaction (click a link, button, etc) to change the url inside their browser
  2) Browser passes request to History library - history parses over url to see what changed
  3) History passes new url request on to React Router
  4) React Router decides what new components to show based on the new route
  5) React Router passes the new components on to React
  6) React renders the new components to the screen

## BrowserRouter

- interacts with the history library and decides what to do based on a change inside the url

## Route

- the workhorse of all things React Router
- it is a React Component that we can put inside any other React Component
- it provides the configuration based on the url to React Router to show the corresponding component

- **2 REQUIRED Properties:
  1) path=""
  2) component={}

- ** The current our that is shown is another piece of state. The url creates a new view of different components

## Reducer

- will produce the posts piece of state

## Lifecycle method

- a function on a React Component class that is automatically called by React
- componentDidMount() - will be automatically called by React immediately **AFTER** the component it is attached to renders in the DOM
- componentWillMount - will be automatically called by React immediately **BEFORE** the component it is attached to renders in the DOM

## Switch

- Switch is part of React Router
- it helps to make proper explicit connections to routes
- I put the most specific routes at the top of a switch component

## Navigation 

- NO more anchor tags
- I do not ask the browser to do a request and fetch a different HTML doc
- React Router just shows a new set of Components
- I import { Link } from 'react-router-dom'
- Link behaves the same as an HTML anchor tag **EXCEPT** it has a couple built in event handlers that prevent the browser from default behavior that sends another HTTP request for another HTML doc

## Redux form

- form builder for building and validating form elements
- it is only responsible for handling the state and validation of a form
- it is not reponsible for taking the data or saving the data input to a field
- npm install redux-form
- follow docs on setup - import reducer and hook it up to combineReducers method
- WHAT DOES IT DO? -> Redux for saves me from having to manually set up a bunch of Action Creators for forms I build
- **Important** set it up in the combineReducers as a form: key -> form: formReducer
- reduxForm helper method is built-in and acts similar to the connect helper method -> it allows a Component to talk directly to the Redux store
- reduxForm is passed a single argument(a function) that takes a few configurations 
    1) form: (the name of the form) **MUST BE UNIQUE**

- redux form includes a lot of extra properties that are passed to my Components once wired in
- handleSubmit is one of the included properties that I can use with form submissions

  HOW TO USE REDUX FORM:

  1) Identify different pieces of form state
  2) Make 1 'Field' Component per piece of state
  3) User changes a 'Field' input
  4) Redux form automatically handles changes
  5) User submits form
  6) Redux forms hands control of the form back to me -> I validate inputs and handle form submittal VIA callbacks

## Field Component (from redux-form)

- used to specify an input field in a redux-form -> same as an HTML input field
- can have a component prop which takes a function as an argument
- it wires up event handlers and Action creators for us
- it holds the data and communicates with Redux Form
- IT DOES NOT - know how to show itself on the screen(JSX)
- the 'component' prop tells the Field Component how to show itself on the screen with JSX
- it is up to me to define the 'component' prop

## 3 different states to be aware of for every form

  1) pristine - default - page first loaded - user has never entered the field
  2) touched - a user has focused or input data then focused out
  3) invalid - incorrect info entered - error

## Programmatic navigation

- automatically move user around the app
- ie. after a blog post submit return to blog list page