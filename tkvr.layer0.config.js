// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
if (process.env.RUN_LOCAL === 'true') {
    const path = require('path');
    const env = require('dotenv');
    env.config({ path: path.resolve(process.cwd(), '.env.local') });
}
module.exports = {
    connector: '@layer0/next',
    backends: {
        graphql: {
            domainOrIp: process.env.GRAPHQL_BACKEND_DOMAIN,
            hostHeader: process.env.GRAPHQL_BACKEND_HOST_HEADER,
        },
        'legacy-www': {
            domainOrIp: process.env.LEGACY_WWW_BACKEND,
            hostHeader: process.env.LEGACY_WWW_BACKEND_HOST_HEADER,
        },
    },
    prerenderConcurrency: 5,
};