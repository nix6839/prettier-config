# @nix6839/prettier-config

[![CI](https://github.com/nix6839/prettier-config/actions/workflows/ci.yml/badge.svg)](https://github.com/nix6839/prettier-config/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/@nix6839%2Fprettier-config.svg)](https://badge.fury.io/js/@nix6839%2Fprettier-config)

Han Yeong-woo's extensible shared Prettier config

## Usage

### 1. Install prettier and this package

```sh
npm i -D @nix6839/prettier-config prettier
```

### 2. Add `"@nix6839/prettier-config"` to your `.prettierrc`

## What is overridden

```js
{
  singleQuote: true, // You don't have to press Shift.
  useTabs: true, // Accessibility first
}
```

For accessibility of `useTabs`, see the following [Reddit post](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/).
