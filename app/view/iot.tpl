<!DOCTYPE html>
<html>

<head>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
        <title>阿里云IoT</title>
        <link href="/public/static/css/weui.css" rel="stylesheet">
        <link rel="stylesheet" href="/public/static/css/iothome.css" />
    </head>

    <body>
        <div class="weui-cells__title top-div">LCD控制</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label class="weui-label">显示文案：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="[a-z]*" placeholder="English only" id="sendToLcdInput" />
                </div>
            </div>
            <div class="weui-cell">
                <div class="sp-area">
                    <a href="javascript:;" id="sendToLcdBtn" class="weui-btn weui-btn_plain-default">发送</a>
                </div>
            </div>
        </div>
        <div class="weui-cells__title top-div">蜂鸣器控制</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cell_switch">
                <div class="weui-cell__bd">蜂鸣器开关</div>
                <div class="weui-cell__ft">
                    <input class="weui-switch" type="checkbox" id="buzzerSwitch" />
                </div>
            </div>
        </div>
        <div class="weui-cells__title top-div">电控锁控制</div>
        <div class="weui-cell">
            <div class="sp-area">
                <a href="javascript:;" id="openLockBtn" class="weui-btn weui-btn_plain-default">远程开锁</a>
            </div>
        </div>
        <div class="weui-cells__title top-div">温湿度计</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label class="weui-label">温度：</label>
                </div>
                <div class="weui-cell__bd">
                    <label class="weui-label">26℃</label>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label class="weui-label">湿度：</label>
                </div>
                <div class="weui-cell__bd">
                    <label class="weui-label">40%</label>
                </div>
            </div>
        </div>

        <div class="weui-cells__title top-div">LED灯控制</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cell_switch">
                <div class="weui-cell__bd">LED灯开关</div>
                <div class="weui-cell__ft">
                    <input class="weui-switch" type="checkbox" id="ledSwitch" />
                </div>
            </div>
        </div>

        <script type=text/javascript src=/public/static/js/zepto.min.js></script>
        <script type=text/javascript src=/public/static/js/iothome.js></script>
        <script type=text/javascript src=/public/static/js/weui.min.js></script>
    </body>

</html>