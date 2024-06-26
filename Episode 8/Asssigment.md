## Namaste React Course by Akshay Saini

# Episode 08 - Let's get Classy

## Theory Assignment:

- What is the `order of life cycle method calls` in `Class Based Components`?
// Render Phase and Commit Phase - Updates the DOM(takes a lot of time); Mounting - constructor, render, updating the DOM, componentDidMount(), Updating(newProp, useState(), forceState()) - render, updating the DOM, componentDidUpdate() and Unmounting - componentWillUnmount().

- Why do we use `componentDidMount`?
// To perform any action after the component has been mounted to the DOM.

- Why do we use `componentWillUnmount`? Show with `example`.
// To perform any action before the component unmounts.

- (Research) Why do we use `super(props)` in `constructor`?
// To access the props in the constructor.

- (Research) Why `can't we have` the `callback function` of `useEffect async`?
// acync function return a promise but useEffect's callback function should return either a function or nothing.

## Coding Assignment:

- Create `Class Based` Component.
  - Create 2 `class-based child components`.
  - `Pass props` from `Parent to child`.
  - Create a `constructor`.
  - Create a `state variable` inside child.
  - Use `this.setState` to update it.
  - What if there are `multiple state variables`?
  - Write a `console.log` for each lifecycle method.
  - Play with the `console logs` to find out the `correct order of their execution`.
- Create `interval` inside `componentDidMount`?
  - Use `clearInterval` to `fix the issue` caused by the `interval`

## References:

- [React Life Cycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
