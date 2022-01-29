module.exports = {
  images: {
    domains: ['images.unsplash.com', 'tailwindui.com', 'graph.facebook.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
};
