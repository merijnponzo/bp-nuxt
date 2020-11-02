module.exports = {
  apps: [
    {
      name: "buroponzo",
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
      env: {
        HOST: "127.0.0.1",
        PORT: 3002,
        NODE_ENV: "production",
        WP_API: "https://cms.buroponzo.nl/wp-json/wp/v2",
        BP_API: "https://cms.buroponzo.nl/wp-json/bp/v1",
        SITEPATH: "https://cms.buroponzo.nl/"
      }
    }
  ]
};
