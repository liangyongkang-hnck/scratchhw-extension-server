function addGenerator(Blockly) {
    Blockly.Arduino['l298n_init'] = function (block) {

        let motor_name = Blockly.Arduino.valueToCode(this, 'motor_name', Blockly.Arduino.ORDER_ATOMIC);
        let pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        let speed_pin = Blockly.Arduino.valueToCode(this, 'speed_pin', Blockly.Arduino.ORDER_ATOMIC);
        motor_name=motor_name.replace(/\"/g, "")
        //初始化
        Blockly.Arduino.definitions_[`define_l298n_init_${motor_name}_pin`] = `int ${motor_name}_pin=${pin};`;
        Blockly.Arduino.definitions_[`define_l298n_init_${motor_name}_speed_pin`] = `int ${motor_name}_speed_pin=${speed_pin};`;
        Blockly.Arduino.definitions_[`define_l298n_init_motor_method`] = `
void motor(int pin,int speedPin,int direction,int speed){
    pinMode(pin,OUTPUT);
    if(direction==1){//正转
        analogWrite(speedPin,speed);
        digitalWrite(pin,HIGH);
    }else if(direction==2){//反转
        analogWrite(speedPin,255-speed);
        digitalWrite(pin,LOW);
    }else if(direction==0){//停止
        analogWrite(speedPin,0);
        digitalWrite(pin,LOW);
    }

}
`;
    return '';
}
Blockly.Arduino['l298n_motor_control'] = function (block) {
    let motor_name = Blockly.Arduino.valueToCode(this, 'motor_name', Blockly.Arduino.ORDER_ATOMIC);
    motor_name=motor_name.replace(/\"/g, "")
    let direction = this.getFieldValue('direction');
    let speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);
    let code=`motor(${motor_name}_pin,${motor_name}_speed_pin,${direction},${speed});\n`
    return code;
}


    return Blockly;

}
exports = addGenerator;
