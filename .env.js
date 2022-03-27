const app = require('./package.json');

module.exports = Promise.resolve({
    // default variables for all environments.
    default: {
        HTTPS: true, // local HTTPS support.
        GENERATE_SOURCEMAP: true, // enables/disables sourcemaps generation.
        SKIP_PREFLIGHT_CHECK: true, // avoid package from node_modules versions conflicts. Used for jest.
        REACT_APP_DEBUG: true,
        REACT_APP_VERSION: app.version,
        REACT_APP_TITLE: app.title,
        REACT_APP_DESCRIPTION: app.description,
        REACT_APP_NOSCRIPT: 'Necesitas activar JavaScript para ejecutar esta aplicación.',
        REACT_APP_AAD_ENABLED: true, // when true, turn on HTTPS.
        REACT_APP_AAD_LOGIN_ACTION_REDIRECT: '/login', // login auth route.
        REACT_APP_AAD_LOGOUT_ACTION_REDIRECT: null,
        REACT_APP_WEB_API_HOST: 'https://desa-saludintegral.achs.cl'
    },

    // used on tests running.
    test: {},

    // used on project building.
    build: {
        //NODE_OPTIONS: '--max_old_space_size=4096', // increases build heap size.
    },

    debug: {
        PORT: 3000,
        REACT_APP_ENV: 'debug',
        REACT_APP_BASE_PATH: 'http://localhost:3000'
    },
    development: {
        REACT_APP_ENV: 'development',
        REACT_APP_BASE_PATH: 'http://localhost:3000'
    },
    qa: {
        REACT_APP_ENV: 'qa'
    },
    production: {
        REACT_APP_ENV: 'production'
    }
});
