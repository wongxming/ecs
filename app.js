'use strict';
var IoTClient = require('aliyun-iot-server-sdk');

module.exports = app => {
    var options = {
        accessKey: '',
        accessKeySecret: '',
    };

    app.aliyunIoTClient = IoTClient.getIotServerClient(options);

};