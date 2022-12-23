# ngIfResponsive

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
![!Codecov](https://img.shields.io/codecov/c/github/kreuzerk/ng-if-responsive)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

> A simple project that provides helpers to render or remove elements from the DOM based on screen size. Its like `ngIf`, just responsive.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
  - [Import](#import)
  - [Usage in HTML](#usage-in-html)
    - [Pixel breakpoint](#pixel-breakpoint)
    - [Configuration usage](#configuration-usage)
- [Contributors ✨](#contributors-)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Demo

Checkout a running demo application at https://kreuzerk.github.io/ng-if-responsive/.

## Installation

To install this project run the following command in a terminal of your choice.

```bash
npm install ng-if-responsive
```

## Usage

The project currently provides two directives. A `ngIfResponsiveRender` and a `ngIfResponsiveRemove` directive. As the name indicates the remove directive is used to remove some elements on certain screen sizes and the render directive is used to render elements on certain screen sizes.

### Import

Both directives are exported as standalone components and can therefore be added to the `imports` array in your module or standalone component.

```typescript
imports: [NgIfResponsiveRemoveDirective, NgIfResponsiveRenderDirective];
```

### Usage in HTML

Both directives can be applied as attribute directives on any given DOM element. Each directive accepts the breakpoint as input. When using the directive there are two options, you can either pass in the width of the screen size in Pixel as a number or you can use a custom key as breakpoint identifier (this has to be configured, via Injection token, see below)

#### Pixel breakpoint

To use a picel as breakpoint you can use the directive in the following way:

```html
<h3 *ngIfResponsiveRemove="640">Hide on screens bigger than sm</h3>
```

#### Configuration usage

If you want to use customized breakpoint identifiers you can define them via the ``RESPONSIVE_NG_IF_CONFIG` injection token. A example configuration inside your `AppModule` or `AppComponent` could look like this.

```typescript
providers: [
  {
    provide: RESPONSIVE_NG_IF_CONFIG,
    useValue: {
      sm: 640,
      md: 769,
      lg: 1024,
      xl: 1080,
    },
  },
];
```

Based on the configuration you can then go ahead and pass one of the keys (`sm`, `md`, `lg`, `xl`) to the directive.

```html
<h3 *ngIfResponsiveRemove="'sm'">Hide on screens bigger than sm</h3>
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://medium.com/@kevinkreuzer"><img src="https://avatars.githubusercontent.com/u/5468954?v=4?s=100" width="100px;" alt="Kevin Kreuzer"/><br /><sub><b>Kevin Kreuzer</b></sub></a><br /><a href="https://github.com/kreuzerk/ngIfResponsive/commits?author=kreuzerk" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
