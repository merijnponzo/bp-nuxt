module.exports = {
  apps: [
    {
      name: "buroponzo",
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
      env: {
        HOST: "127.0.0.1",
        PORT: 3002,
        NODE_ENV: "production"
      }
    }
  ]
};
