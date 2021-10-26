module.exports = ({ env }) => ({
    netlifyWebhook: env("VERCEL_WEBHOOK"),
  });