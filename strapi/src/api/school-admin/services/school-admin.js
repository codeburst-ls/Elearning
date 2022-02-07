'use strict';

/**
 * school-admin service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::school-admin.school-admin');
