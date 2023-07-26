module.exports = {
  apps: [
    {
      name: 'hispanic-web',
      exec_mode: 'cluster',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      watch: true,
      env_development: {
        PORT: 6969,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 6969,
        NODE_ENV: 'production',
      },
    },
  ],
};
