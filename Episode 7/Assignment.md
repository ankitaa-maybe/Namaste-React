## Namaste React Course by Akshay Saini

# Episode 07 - Finding the Path

## Theory Assignment:

- What are various ways to `add images` into our App? Explain with `code examples`.
  // using url (img tag), making another folder/files for it ans import/export it,

- What would happen if we do `console.log(useState())`?
  // gives [undefined, function]; we get an array `[undefined, function]` where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.

- How will `useEffect` behave if we `don't add` a `dependency array`?
  // then the callback function will be called each time the component is rendered

- What is `SPA`?
  // Single Page Application - 1 page, only the components are gettign interchanged via client side routing; a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

- What is the `difference` between `Client Side Routing` and `Server Side Routing`?
  // Server side Routing make network calls and then fatch data and display on the screen, where CSR makes all the network calls in the beginning and then without refreshing the whole page shows the information.

## Coding Assignment:

- Add `Shimmer Effect without installing a library`.
- Install `react-router-dom`.
- Create an `appRouter` and `Provide it to the app`.
- Create a `Home, About, and Contact Page` with Link (use child routes).
- Make an `Error page` for `routing errors`.
- Create a `Restaurant Page` with `dynamic restaurant ID`.
- (Extra) - Create a `login Page` using `Formik Library`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React Router DOM](https://reactrouter.com/en/main)
- [Client Side Routing](https://reactrouter.com/en/main/start/overview)
- [Formik](https://formik.org/)
