import type { Config, Options, RequiredOptions } from 'prettier';

type PrettierOptions = Omit<
  RequiredOptions,
  // Depreacted options.
  | 'jsxBracketSameLine' // use bracketSameLine instead

  // Options that don't have default value.
  | 'parser'
  | 'filepath'
  | 'plugins'
  | 'pluginSearchDirs'
  | 'parentParser'
  | '__embeddedInHtml'
>;

type PrettierConfig = PrettierOptions & Omit<Config, keyof Options>;

const config: PrettierConfig = {
  // Overridden options
  singleQuote: true,
  trailingComma: 'all',

  // Options with default values
  semi: true,
  jsxSingleQuote: false,
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

module.exports = config;
export = config;
