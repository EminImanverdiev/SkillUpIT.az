module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 1, // Allows modern CSS features
      features: {
        "nesting-rules": true, // Enable CSS nesting
      },
    }),
  ],
};
