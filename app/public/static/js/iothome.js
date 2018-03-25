$(function() {


    $('#sendToLcdBtn').on('click', function() {
        var txt = $('#sendToLcdInput').val();

        $.get('/api/iot/lcd?text=' + txt, function(response) {
            console.log(response)
            weui.toast('LCD更新成功', 1000);

        });
    });


    $('#buzzerSwitch').on('change', function(e) {
        e.preventDefault();
        var state = "off";
        if ($('#buzzerSwitch').prop("checked")) {
            state = "on";
        }

        $.get('/api/iot/buzzer?state=' + state, function(response) {
            console.log(response)
            if ($('#buzzerSwitch').prop("checked")) {
                weui.toast('蜂鸣器 开启', 1000);
            } else {
                weui.toast('蜂鸣器 关闭', 1000);
            }


        });

    })

$('#ledSwitch').on('change', function(e) {
        e.preventDefault();
        var state = "off";
        if ($('#ledSwitch').prop("checked")) {
            state = "on";
        }

        $.get('/api/iot/light?state=' + state, function(response) {
            console.log(response)
            if ($('#ledSwitch').prop("checked")) {
                weui.toast('LED灯 开启', 1000);
            } else {
                weui.toast('LED灯 关闭', 1000);
            }


        });

    })

    

    $('#openLockBtn').on('click', function() {

        $.get('/api/iot/openlock', function(response) {
            console.log(response)
            weui.toast('开锁成功', 1000);

        });
    });

});