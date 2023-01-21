### Project Health:

![GitHub release](https://img.shields.io/github/actions/workflow/status/smartive-education/design-system-component-library-thierry-und-simon/release.yml?label=Release%20Component%20Library)
![GitHub release (latest SemVer)](https://img.shields.io/github/actions/workflow/status/smartive-education/design-system-component-library-thierry-und-simon/storybook.yml?label=Deploy%20Storybook)

### Issue Tracking:

![GitHub Issues](https://img.shields.io/github/issues/smartive-education/design-system-component-library-thierry-und-simon)
![Github PR](https://img.shields.io/github/issues-pr/smartive-education/design-system-component-library-thierry-und-simon)

## Contributing Guidelines

To contribute to the project, please follow the below guidelines.

- Open a GitHub Issue for each necessary fix or change
- Always work in your own branche and create pull request if ready to merge into master
- we use semantic commit messages and always include the issue number as part of the commit message.

More infos on semantic commits and comit messages:

```
feat: #Issue No description
^--^  ^-------^ ^----------^
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html
- https://gist.githubusercontent.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716/raw/e75b1b9536ee5ee82e2ec0ba8948d8f8238488c3/semantic-commit-messages.md

## Deployment

    @@ -59,29 +25,6 @@ Please ensure the following prerequisites are met:

- When trying with `npm pack`, all your required files are included in the resulting tarball
- Your `package.json` file contains the correct _scope_ for your package (`@smartive-education`)
- The `package.json` file contains the correct registry
<pre>

</pre>

## Installation and Usage

### Package Installation

This installation guideline assumes that you have a running react installation with Tailwind and Typescript installed.

To install the package you need a personal GitHub Access Token. Create a `.npmrc` file in the same directory as your `package.json` and add the key and the declaration of the owner of the repo to your project:

```
@smartive-education:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken="--PERSONAL KEY--"
```

To install the design system package run the follwoing command within the root directory of your project.

```
npm install @smartive-education/thierry-simon-mumble@1.8.0
```

## Doku

Scripts zum Build:
´npm run build´ legt einen neuen dist folder an, welcher dann deployed werden kann. Im Moment ist dieser mittels gitignore nicht im Repo. Damit die Components in einem neuen Repo genutzt werden können, muss man wie folgt vorgehen:

1. neues Projekt anlegen
2. npm install npm install https://github.com/smartive-education/design-system-component-library-thierry-und-simon/tree/v1.1.0 ausführen
3. Komponenten nutzen und mit import {Button, ButtonType } from "@smartive-education/mumble"; importieren.
4. Projekt muss Tailwind installiert haben, damit die Klassen erkannt werden.

[Todo:] Check ob dist Folder ins Repo soll / Check ob Tailwind Teil des Bundles sein muss?

### Icons

Die Icons können als SVG Files im Folder assets abgelegt werden. Mit dem command `npm run svgr` werden daraus React Components erstellt, welche in `src/Icons`abgelegt sind. Wenn neue Icons hinzugeüfgt werden, müssen die danach in der Icon Komponenten importiert und hinzugeüfgt werden.

Die Icon-Komponente wird danch importiert und verwendet. Es werden zwei Props erwartet: Type (Type des Icons und color (Farbe, Standard Slate)).

Um
