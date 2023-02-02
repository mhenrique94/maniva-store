module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_ACCESS_TOKEN,
      sites: [
        {
          name: "coruscating-quokka-614ed1",
          id: process.env.NETLIFY_ID,
          buildHook: process.env.NETLIFY_BUILDHOOK,
          branch: "main", // optional
        },
      ],
    },
  },
});
