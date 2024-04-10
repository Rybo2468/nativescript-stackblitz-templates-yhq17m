const webpack = require('@nativescript/webpack');

module.exports = (env) => {
  webpack.init(env);

  return {
    // Other webpack configuration options...
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        // Other rules...
      ],
    },
    resolve: {
      // Add '.jsx' extension to resolve
      extensions: ['.js', '.jsx'],
    },
  };
};
