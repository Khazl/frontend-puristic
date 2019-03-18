# Frontend Puristic #

This repositroy provides you all necessary npm bundles to kickstart a modern but puristic frontend web project.

### What bundles are included? ###

Following important bundles are included:

* **Gulp**
  * Gulp is for automating some tasks like scss to css or es5 to es6 compilations/transpilations.
* **Babel**
  * Babel is your JS transpiler.
* **libsass**
  * libsass is your super fast SCSS compiler.
* thats it...


### How do I get set up? ###

1. Clone this repository: `$ git clone git@github.com:Khazl/frontend-puristic.git`
2. Move into the repository root directory (should contain the package.json).
3. Install all necessary npm packages: `$ npm install`
4. Install Gulp globally `$ npm install gulp -g`
5. done!

Now you can run `$ gulp` and start developing.

### Commands ###

`$ gulp` starts the local dev server with browsersync and the js and css watcher

`$ gulp watch` starts the js and css watcher

`$ gulp build` runs the js and css compilation

`$ gulp js` runs the js compilation

`$ gulp css` runs the css compilation

### Todo ###

- js auto reload after compilation


### Other recommended packages ###

* **JS**
  * Fetch Polyfill: https://github.com/github/fetch
  * Events: https://github.com/mroderick/PubSubJS
  * Utilities: https://github.com/lodash/lodash