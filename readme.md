<h1 align="center">
  Grow Up Mobile
</h1>

### Requirements:

- [NodeJS](https://nodejs.org) (16.x.x)
- [PostgreSQL](https://www.postgresql.org) (13.x)
- [Yarn](https://yarnpkg.com)

## Code quality

We have certain [quality criteria](https://github.com/BinaryStudioAcademy/quality-criteria/blob/production/source/javascript.md), which we should follow during application development.

## Development

This project is mainly focused on the Android platform. Pay attention that if we add any library, we **MUST** configure it for both IOS and Android platforms.

Also please note that we use `yarn` for this project.

In case you install new library don't forget to run `cd ios && pod install` or just `npx pod-install`

## Commits

Commit message **must** have next structure:

```
GUM-<task #>: <description>
```

- `task #` - Trello task number
- `description` - a short summary of code changes

Examples:

- `GUM-15: add private routes`
- `GUM-9: change button-styles`
- `GUM-32: fix user profile avatar`

## Branches

In this project we follow with [Pull Request process](https://help.github.com/en/articles/about-pull-requests). Two main branches (`main` and `develop`) are protected with [Github branch protection rules](https://help.github.com/en/articles/defining-the-mergeability-of-pull-requests):

- Require pull request with 2 reviews and at least one from code owner before merging

Normal flow is to create a new branch for each task or group of linked tasks. Name of branch **must** have next structure:

```
<prefix>/GUM-<task #>-<description>
```

- `prefix` - allowed prefixes: `new`, `patch`, `fix`.
- `task #` - Trello task number
- `description` - a short summary of the task

Examples:

- `new/GUM-15-private-routes`
- `patch/GUM-9-button-styles`
- `fix/GUM-32-user-profile-avatar`

After task is completed ― create PR of your branch into `develop` and assign other developers to review.

## How to start the app

1. Create and fill in **.env** file following **.env.example** file
2. Run `yarn` at the root folder
3. Start Metro: `yarn start`
4. Start the app:`yarn android` in a new terminal
