import type * as prettier from 'prettier';

type MustSetOptions = Required<
  Omit<
    prettier.Options,
    // Deprecated options.
    | 'jsxBracketSameLine' // use bracketSameLine instead

    // Options that don't have default value.
    | 'parser'
    | 'filepath'
    | 'plugins'
    | 'pluginSearchDirs'
    | 'parentParser'
    | '__embeddedInHtml'
  >
>;

type Config = MustSetOptions & Omit<prettier.Config, keyof MustSetOptions>;

const config: Config = {
  // Overridden options
  singleQuote: true,

  // Options with default values
  semi: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  quoteProps: 'as-needed',
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: false,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
};

export default config;
