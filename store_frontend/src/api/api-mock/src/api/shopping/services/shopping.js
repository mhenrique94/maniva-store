'use strict';

/**
 * shopping service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shopping.shopping');
