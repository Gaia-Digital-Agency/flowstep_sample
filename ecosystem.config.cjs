// PM2 ecosystem for Flowstep on gda-s01.
// The `cwd` is relative to the repo root (i.e. /var/www/flowstep/current).
// Web is a static SPA served by Nginx — only the CMS runs as a node service.
// Env is loaded from /var/www/flowstep/shared/.env via dotenv at runtime.
module.exports = {
  apps: [
    {
      name: "flowstep-cms",
      cwd: "./packages/cms",
      script: "pnpm",
      args: "start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
        NODE_OPTIONS: "--no-deprecation",
      },
      error_file: "/var/www/flowstep/shared/logs/cms.err.log",
      out_file: "/var/www/flowstep/shared/logs/cms.out.log",
      merge_logs: true,
      max_memory_restart: "500M",
    },
  ],
};
