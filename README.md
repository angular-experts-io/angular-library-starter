# Angular library starter

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

> Build epic Angular libraries in no time! Stop loosing time over the library setup and focus on the library logic!

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [What's included](#whats-included)
- [Which technologies are included](#which-technologies-are-included)
- [How to use this starter](#how-to-use-this-starter)
  - [Use the template](#use-the-template)
  - [Customization](#customization)
- [Showcase deployment](#showcase-deployment)
- [Use fully automated releases](#use-fully-automated-releases)
- [Contributors ✨](#contributors-)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## What's included

The library starter contains state of the art technologies and best practices when it comes to delivering Angular libraries. Here are some of the included core features.

- Library setup
- Showcase setup
- Lint setup
- Testing Setup
- Test Coverage reporting
- Commit linting (Conventional commits enforcement)
- Fully automated releases to NPM based on commit messages
- Automatic showcase deployments to GitHub Pages
- Automated contributors credit
- Code of conduct
- Automated Changelog generation
- Automated version bump in GitHub
- Automated creation of Tags in GitHub
- Automated creation of releases with release notes in GitHub
- Code preview in the showcase

## Which technologies are included

- Angular (15)
- Jest
- Esllint
- Husky
- Commitlint
- Lint staged
- Semantic release
- ngx-highlight
- Tailwind (for the showcase)

## How to use this starter

### Use the template

To use this starter you have to click on the `Use Template`. Once you have the template, clone it, and run the following commands.

```bash
npm ci
```

### Customization

Once you cloned the template you can run the fllowing command to customise it.

```bash
npm run customize
```

## Showcase deployment

This starter uses a Github action to automatically deploy your showcase to GitHub pages.
If this doesn't work out of the box you probably have to enable deployments under the settings of your repository.

To enable deployments go to the settings of your repository and navigate to the `Pages` section and choose the `gh-pages` branch as source.
Note that this branch will be created automatically once you push your code to the repository.

## Use fully automated releases

In order to make fully automated releases work you have to add two tokens as repository secrets.

- `GH_TOKEN`
- `NPM_TOKEN`

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
