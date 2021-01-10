module.exports = {
	extends: [
	  "plugin:vue/recommended"
	],
	rules: {
		"vue/script-indent": ["error", "tab", {
			"baseIndent": 0,
			"switchCase": 0,
			"ignores": []
		}],
		"vue/html-indent": ["error", "tab", {
			"attribute": 1,
			"baseIndent": 1,
			"closeBracket": 0,
			"alignAttributesVertically": true,
			"ignores": []
		}],
		"vue/html-quotes": [ "error", "double", { "avoidEscape": true } ],
		"quotes": ["error", "double", { "avoidEscape": true } ],
		"vue/html-closing-bracket-newline": ["error", {
			"singleline": "never",
			"multiline": "never",
		}],
		"vue/max-attributes-per-line": ["error", {
			  "singleline": 1,
			  "multiline": {
				  "max": 1,
			  },
		}],
		"semi": [1, "always"]
	}
}
