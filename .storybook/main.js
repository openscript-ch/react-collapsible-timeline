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
    if(configType === "PRODUCTION") {
      return {...config, base: './'};
    }
    return config;
  }
}
