import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        "env": {
            "browser": true,
            "es2021": true,
            "node": true
        },
        rules: {
            semi: "error",
            "prefer-const": "error"
        },
        languageOptions: {
            globals: globals.browser
        }
    },
    pluginJs.configs.recommended,
];