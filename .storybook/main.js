const react = require("@vitejs/plugin-react");

module.exports = {
  stories: [
    "../stories/Start.stories.mdx",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        transcludeMarkdown: true
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource"
  ],
  core: {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins.filter(
      (plugin) =>
        !(Array.isArray(plugin) && plugin[0]?.name.includes("vite:react"))
    );

    config.plugins.push(
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      })
    );

    if(configType === "PRODUCTION") {
      return {...config, base: './'};
    }
    return config;
  }
}
