# eslint-plugin-kritjo-lightapp

Custom Rules that kritjo likes for react and next

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-kritjo-lightapp`:

```sh
npm install eslint-plugin-kritjo-lightapp --save-dev
```

## Usage

Add `kritjo-lightapp` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["kritjo-lightapp"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "kritjo-lightapp/rule-name": 2
  }
}
```

## Configurations

<!-- begin auto-generated configs list -->

TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).

<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->

| Name                                                             |
| :--------------------------------------------------------------- |
| [server-only](docs/rules/server-only.md)                         |
| [tsx-element-pascal-case](docs/rules/tsx-element-pascal-case.md) |
| [tsx-element-return-type](docs/rules/tsx-element-return-type.md) |
| [tsx-props-no-spreading](docs/rules/tsx-props-no-spreading.md)   |
| [use-server](docs/rules/use-server.md)                           |

<!-- end auto-generated rules list -->
