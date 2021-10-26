'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

 const axios = require("axios");
 const vercelWebhook = strapi.config.get("custom.vercelWebhook");
 
 module.exports = {
   lifecycles: {
     async afterCreate(_, __) {
       vercelWebhook && axios.post(vercelWebhook);
     },
     async afterUpdate(_, __, ___) {
       vercelWebhook && axios.post(vercelWebhook);
     },
   },
 };