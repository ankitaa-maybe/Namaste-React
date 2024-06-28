## Namaste React Course by Akshay Saini

# Episode 11 - Data is the new oil

## Theory Assignment:

- What is prop drilling?
// Passing props to child via many intermediate parent nodes

- What is lifting the state up?
// Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props.

- What are Context Provider and Context Consumer?
// Context is a way for a child component to get some data from the parent component without having to
pass props down manually at every level.
// Context is also typically used to pass data through a deeply nested component tree. It allows several components
to share the same data. Context is primarily used when some data needs to be accessible by many components
at different nesting levels. Apply it sparingly because it makes unit testing difficult.

- If you don't pass a value to the provider does it take the default value?
// the context will use the default value defined when the context was created

## Coding Assignment:

- Practice React Context with code examples
- Try out Nested Contexts

## References:

- [Lifting State Up](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)
- [React Context](https://react.dev/reference/react/useContext)
