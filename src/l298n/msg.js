function addMsg(Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT : 'init motor name is %1 set pin %2 speed_pin %3',
        L298N_MOTOR_CONTROL : 'motor name is %1 direction %2 speed %3'

    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT : '初始化直流电机%1 设置 pin %2 speed_pin %3',
        L298N_MOTOR_CONTROL : '直流电机 %1 方向 %2 速度 %3'

    });
    return Blockly;
}

exports = addMsg;

