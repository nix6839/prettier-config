import type * as prettier from 'prettier';

type RemoveIndex<T> = {
	[K in keyof T as string extends K
		? never
		: number extends K
			? never
			: K]: T[K];
};

type MustSetOptions = Required<
	Omit<
		RemoveIndex<prettier.Options>,
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

const config = {
	// Overridden options
	singleQuote: true,
	useTabs: true,

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
} satisfies Config;

export default config;
