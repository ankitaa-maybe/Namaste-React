## Namaste React Course by Akshay Saini

# _Episode 02 - Igniting Our App_

## Theory :

- What is `npm`?
// it manages all the packages, repository for them

- What is `Parcel/Webpack`? Why do we need it?
// they are bundlers, development tool that combine my javascript code files into a single one that is production ready loadable in browser; orgainising, optimizing, managing, have abstracted the pain of tooling and provide an optimized & performance-centric solution to generate static assets, and the advantages

- Why is `.parcel-cache`?
// whenever we build the react app, and we subsequently refresh the code, it uses the data from cache - it's a cache folder created by parcel, it stores the intermediate results of the build process - stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch.

- What is `npx`?
// to execute packages

- What is difference between `dependencies vs devDependencies`?
// crucial packages required for your application to function in a production environment while devDependencies are tools and utilities that aid in the development process but are not needed in production.

- What is Tree Shaking?
// dead code elimination, means that unused modules will not be included in the bundle during the build process.

- What is Hot Module Replacement?
// exchanges, adds, or removes modules within a running application without reloading the page, help speed up development by reducing the feedback cycle and saving time by only updating what's changed, preserve application state that would otherwise might be lost during a full reload

- List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
// Tree Shaking,
 Configuration, 
 Minification - reduces the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations, 
 Image Optimization - Parcel supports resizing (without affecting their quality), converting, and optimizing (lossless) images, Differential Bundling - automatically produces a <script type="module"> with modern JavaScript syntax, as well as a fallback <script nomodule> for older browsers when necessary. This reduces bundle sizes for a majority of users by avoiding transpilation of features like classes, async/await, etc, 
 Compression,
 Content Hashing - enables long-term browser caching,

- What is `.gitignore`? What should we add and not add into it?
// is a folder that all contains all those files which need not to be added in github, those can be re-generated, a plain text document that tells Git which files and directories to ignore when committing to a repository. For security, the security key files and API keys should get added to the gitignore.

- What is the difference between `package.json` and `package-lock.json` files?
// package.json - metadata about the project, dependencies, scripts, version, description, author, etc while lock - documentes the precise dependencies, sub-dependencies, and installation paths for accurate reproducibility.

- Why should I not modify `package-lock.json`?
// it's automatically generated by npm to track the exact versions of packages and their dependencies, keeps track of exact dependency trees at any given time. It will ensure that all clients that download your project and attempt to install dependencies will get the exact same dependency tree, also has a mechanism to lock the tree but generally will regenerate if package.json changes.

- What is `node_modules`? Is it a good idea to push that on git?
// node_modules is a folder where all the dependencies are installed, it's not recommended to push it

- What is the `dist` folder?
// stands for distributable, contains the minimized version of the source code, actually the code which is used on production web applications, also comprises of all the compiled modules that may or may not be used with other systems.

- What is `browserlists`? 
// a configuration file that specifies which browsers and versions to support, helps in targeting specific browsers and their
versions, helps in determining which features to include or exclude in the build process.

- Read about different bundlers: vite, webpack, parcel
- Read about: `^-caret` and `~-tilde`
- Read about Script types in html(MDN Docs)

## Coding :

In your existing project

- initialize `npm` into your repo
- install `react` and `react-dom`
- remove CDN links of react
- install parcel
- ignite your app with `parcel`
- add script for "start" and "build" with parcel commands
- add `.gitignore` file
- add `browserlists`
- build a production version of your code using `parcel build`

## References:

- [Parcel Documentation](https://parceljs.org/docs/)
- [Parcel on Production](https://parceljs.org/features/production/)
- [Browserlists](https://browserslist.dev/)