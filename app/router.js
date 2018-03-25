'use strict';

module.exports = app => {
    //const auth = app.middlewares.auth();
    // 页面路由
    app.get('/', app.controller.web.iothome);

	app.get('/api/iot/openlock', app.controller.api.iot.openlock);
	app.get('/api/iot/buzzer', app.controller.api.iot.buzzer);
    app.get('/api/iot/lcd', app.controller.api.iot.lcd);
    app.get('/api/iot/light', app.controller.api.iot.light);

    
};