export default {
	plugins: ["prettier", "import", "@typescript-eslint", "react", "react-hooks"],
	extends: [
		"plugin:prettier/recommended",
		"prettier",
		"eslint:recommended",
        "plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	root: true,
	parserOptions: {
		"ecmaVersion": 2020,
		"sourceType": "module",
		"project": "./tsconfig.json"
	},
	env: {
		"es6": true,
		"browser": true,
		"node": true
	},
	rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
		"no-debugger": "off",
		"no-console": 0,
		"class-methods-use-this": "off",
		"@typescript-eslint/no-explicit-any": "error"
	},
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true
            }
        },
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
	ignorePatterns: ["dist", "*.config.cjs"]
};
