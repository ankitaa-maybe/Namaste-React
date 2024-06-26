## Namaste React Course by Akshay Saini

# Episode 09 - Optimizing our App

## Theory Assignment:

- When and why do we need `lazy()`?
  // to do lazy loading where we want all js code shouldn't be in 1 file only, we should create small small bundles for greater optimization

- What is `suspense`?
  // lets you display a fallback until its children have finished loading.

- Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?
  // suspense is used to load data from server and then show it on the screen so when we are using suspense we should use start transition to fix this error start transition is used to tell the react that we are loading data from server and we will show it on the screen when it is loaded

- `Advantages and Disadvantages` of using this `code splitting pattern`?
  // a technique where we split our code into various bundles which can then be loaded on demand or in parallel. Advantages - It helps to reduce the bundle size improve the performance, user experience, SEO, security, reduce the load time of our app. Disadvantages - It can be difficult to debug and maintain, test and deloy, manage and optimize, scale and maintain the code splitting process.

- When `do we and why do we need suspense`?
  // when we want to load data from server and then show it on the screen.

## Coding Assignment:

- Create your `custom hooks`.
- Try out `lazy and suspense`
- Make your `code clean`.

## References:

- [React Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
- [React lazy](https://react.dev/reference/react/lazy#suspense-for-code-splitting)
