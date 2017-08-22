# Maven-NPM
A simple Maven Web Application with some NodeJS utility.

This application:

- is a Maven Web Application project.
- is an example that shows how to use Webpack, Babel, ReactJS, Jest, JSHint (using maven-frontend-plugin) with the **only requirement of Maven**.

# Run application

Being a Maven application, you have simply to run:

```
    $ mvn clean install
```

And the deploy the application.

# How it works

With [maven-frontend-plugin] (https://github.com/eirslett/frontend-maven-plugin) we install project-locally NodeJS and NPM (Node Package Manager).

Then, we run a sequence of npm's scripts, declared in package.json.

# NPM Scripts Explanation

## JSHint 

Simply it runs JSHint, a Javascript code quality tool. [JSHint](http://jshint.com/about/)

## Webpack

Webpack is module bundler, which is a standard and useful frontend application tool. [Webpack](https://webpack.github.io/)

In the mojo, it runs 'npm run webpack' reading webpack.config.js configuration file. It uses babel loader with react-es2015 preset, in order to transpiles all project's react components (they are located in src/jsxcomponents).
It creates a single file containing our entire application (build/main.bundle.js).

## Jest

It simply run project's test (src/jsxcomponents/Simplelist.test.js) [Jest] (https://facebook.github.io/jest/)








