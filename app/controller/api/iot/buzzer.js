'use strict';

module.exports = function*() {
    const state = this.query.state;

    var pubBody = {
        device: "iotBuzzer",
        state: state
    }

    var params = {
        ProductKey: "RY8ExdyS6lU",
        TopicFullName: "/RY8ExdyS6lU/bedRoomThermometer/control",
        MessageContent: new Buffer(JSON.stringify(pubBody)).toString('base64'),
        Qos: "1"
    };
    // => returns Promise
    var data = yield this.app.aliyunIoTClient.pub(params);

    console.log(data);

    this.body = {
        "success": true, //是否成功
        "errorCode": "200",
        "errorMsg": "",
        "fields": {
            data: data
        }
    };


};