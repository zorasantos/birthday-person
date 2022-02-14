/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @type {import('next').NextConfig}
 * */

const withTM = require('next-transpile-modules')(['@shared/ui']);

module.exports = withTM({
  reactStrictMode: true
});
