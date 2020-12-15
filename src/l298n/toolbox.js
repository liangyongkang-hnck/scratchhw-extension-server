function addToolbox() {


    return `
<category name="%{BKY_L298N_CATEGORY}" id="L298N_CATEGORY" colour="#99CCFF" secondaryColour="#99CCFF" iconURI="">
    <block type="l298n_init" id="l298n_init">
        <value name="motor_name">
            <shadow type="text">
                <field name="TEXT">a</field>
            </shadow>
        </value>
            <value name="pin">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="speed_pin">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
       </value>       
    </block>
    <block type="l298n_motor_control" id="l298n_motor_control">
        <value name="motor_name">
            <shadow type="text">
                <field name="TEXT">a</field>
            </shadow>
        </value>
        <field name="direction">1</field>
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>       
    </block>

</category>`;
}

exports = addToolbox;