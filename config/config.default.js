'use strict';

module.exports = appInfo => {
    const config = {};

    config.keys = appInfo.name + '_wongxming';

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };

    config.bodyParser = {
        enableTypes: ['json', 'form', 'text'],
        extendTypes: {
            text: ['text/xml']
        }
    };

    config.security = {
        csrf: {
            ignoreJSON: true,
        }
    };


    return config;
};