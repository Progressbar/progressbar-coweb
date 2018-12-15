# Contributing

First, thank you for contributing to our Progressbar page! Here’s some basics about our codebase.

## Organization

This site is a standard [Gatsby v2](https://www.gatsbyjs.org) site, so:

* Pages are in `src/pages/`. They use unnamed default exports (e.g.
  `export default () => ()`).
* Components are in `src/components/`. They use named default exports (e.g.
  `class Hello extends Component {}` + `export default Hello`).
* Atoms are in `src/atoms/`. But we should rather stick to some UI primitives/atoms framework

## Formatting

In all prose (form labels, text blocks, etc), use rich quotes.

For code formatting, we use [Prettier](https://prettier.io) with options.
Before committing, run `yarn run format:js` and you’re good to go.

## Design System

TODO
pick UI primitives/atoms

Use `styled-components`’s
[`.extend`](https://www.styled-components.com/docs/basics#extending-styles)
method for adding custom styling to a UI primitive/atom component.

# Images

TODO
