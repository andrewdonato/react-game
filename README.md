# react-game

https://radiant-savannah-7193.herokuapp.com/

This is an app designed to experiment with and explore ReactJS.
The goal was to use React components to make a Zeldaesque styled game.
As you'll be able to tell, I've got it pretty spot on.

React is a Javascript library.

React operates using a hierarchy of components to pass state.
Anytime the data changes, react recreates the whole application.
This sounds slow but is not because React operates using a virtual DOM.

React creates a virtual DOM since DOM manipulations are slow.
The web logic speaks with the virtual DOM.
React then applies changes in the real DOM to the virtual DOM which is displayed to the user.


My React Component Tree

-Game
  -Board
    -Tile
  -Player // not needed


Props and states:
Changes to either with trigger a render update
Props are the properties of a component.
They are not unable to be changed by the component itself.
A component handles the props of it's children components.

The state of a component is subject to change over time.
A component can change its state but not that of its children.

Here is a link to a really helpful guide on the differences:
https://github.com/uberVU/react-guide/blob/master/props-vs-state.md

A link explaining the React Component Lifecycle
http://busypeoples.github.io/post/react-component-lifecycle/
