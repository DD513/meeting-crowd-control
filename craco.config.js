const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
        modifyLessRule: (lessRule, context) => {
          lessRule.use = lessRule.use.filter(
            (i) => !i.loader.includes("resolve-url-loader")
          );
          return lessRule;
        },
      },
    },
  ],
};
