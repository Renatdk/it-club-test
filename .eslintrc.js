module.exports = {
    env: {
      "es6": true
    },
    extends: ["plugin:vue/vue3-essential", "prettier"],
    rules: {
        // override/add rules settings here, such as:
        "vue/no-unused-vars": "error",
        "no-var": "error",
        "semi": "error",
        "indent": "error",
        "no-multi-spaces": "error",
        "space-in-parens": "error",
        "no-multiple-empty-lines": "error",
        "prefer-const": "error",
        "no-use-before-define": "error",
        "vue/custom-event-name-casing": "warn",
        "vue/no-deprecated-functional-template": "off",
        "vue/html-indent": ["warn", 2],
        "vue/this-in-template": "error",
        "vue/require-default-prop": "error",
        "vue/component-tags-order": ["warn", {
          "order": ["template", "script", "style"]
        }],
        "vue/max-attributes-per-line": ["warn", {
          "singleline": 2
        }],
        "vue/no-v-for-template-key-on-child": "off",
     
    },
}
