module.exports = {
    settings: {
        "import/resolver": {
            typescript: {} // this loads <rootdir>/tsconfig.json to eslint
        },
    },

    extends: ["plugin:storybook/recommended"]
}