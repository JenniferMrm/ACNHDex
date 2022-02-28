const path = require(`path`);

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  style: {
    modules: {
      localIdentName: "",
    },
    css: {
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        return cssLoaderOptions;
      },
    },
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions;
      },
    },
  },
  eslint: {
    enable: true /* (default value) */,
    mode: "extends" /* (default value) */ || "file",
    configure: (eslintConfig, { env, paths }) => {
      return eslintConfig;
    },
    pluginOptions: (eslintOptions, { env, paths }) => {
      return eslintOptions;
    },
  },
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@view": path.resolve(__dirname, "src/view"),
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
  jest: {
    babel: {
      addPresets: true /* (default value) */,
      addPlugins: true /* (default value) */,
    },
    configure: (jestConfig, { env, paths, resolve, rootDir }) => {
      return jestConfig;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    return devServerConfig;
  },
  plugins: [
    {
      plugin: {
        overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
          return cracoConfig;
        },
        overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
          return webpackConfig;
        },
        overrideDevServerConfig: ({ devServerConfig, cracoConfig, pluginOptions, context: { env, paths, proxy, allowedHost } }) => {
          return devServerConfig;
        },
        overrideJestConfig: ({ jestConfig, cracoConfig, pluginOptions, context: { env, paths, resolve, rootDir } }) => {
          return jestConfig;
        },
      },
      options: {},
    },
  ],
};
