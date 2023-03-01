/**
 * Custom blocks
 */
//% color="#FF33B2" icon="\uf085"
namespace smartfeldAktoren {

    let strip = new neopixel.Strip();
    let chain = new smartfeldAktoren.Chain();
    let pig = new smartfeldAktoren.Switchpig();

//--------------------------------------------------------------------------------------------------------

    /**
    * Spins the motor in one direction at full speed
    * @param pin Which pin the motor is on
    */
    //% subcategory="Servo" weight=100 
    //% group="360° Servo 114992423"
    //% blockId=spin_one_way 
    //% block="Drehe in eine Richtung auf Pin %pin"
    export function spin_one_way(pin = AnalogPin.P1): void {
        pins.servoWritePin(pin, 180)
    }

    /**
    * Spins the motor in other direction at full speed
    * @param pin Which pin the motor is on
    */
    //% subcategory="Servo" weight=80 
    //% group="360° Servo 114992423"
    //% blockId=spin_other_way 
    //% block="Drehe in andere Richtung auf Pin %pin"
    export function spin_other_way(pin = AnalogPin.P2): void {
        pins.servoWritePin(pin, 0)
    }

    /**
    * Spins the motor in one direction, with a speed from 0 to 100
    * @param pin Which pin the motor is on
    * @param speed Speed from 0 to 100
    */
    //% subcategory="Servo" weight=60 
    //% group="360° Servo 114992423"
    //% blockId=spin_one_way_with_speed
    //% block="Drehe in eine Richtung auf Pin %pin | mit Geschwindigkeit %speed"
    //% speed.min=0 speed.max=100
    export function spin_one_way_with_speed(pin = AnalogPin.P1, speed = 50): void {
        let spin = (speed * 90) / 100 + 90
        pins.servoWritePin(pin, spin)
    }

    /**
    * Spins the motor in the other direction, with a speed from 0 to 100
    * @param pin Which pin the motor is on
    * @param speed Speed from 0 to 100
    */
    //% subcategory="Servo" weight=40 
    //% group="360° Servo 114992423"
    //% blockId=spin_other_way_with_speed
    //% block="Drehe in andere Richtung auf Pin  %pin | mit Geschwindigkeit %speed"
    //% speed.min=0 speed.max=100
    export function spin_other_way_with_speed(pin = AnalogPin.P2, speed = 50): void {
        let spin = 90 - (speed * 90) / 100
        pins.servoWritePin(pin, spin)
    }

    /**
    * Turns off the motor at this pin
    * @param pin Which pin the motor is on
    */
    //% subcategory="Servo" weight=20 
    //% group="360° Servo 114992423"
    //% blockId=turn_off_motor 
    //% block="Schalte Servo auf Pin %pin aus"
    export function turn_off_motor(pin = DigitalPin.P1): void {
        pins.digitalWritePin(pin, 0)
    }

//--------------------------------------------------------------------------------------------------------

    /**
    * Erstelle eine RGB Kette
    */
    //% subcategory="LED" weight=90 
    //% group="Verkettbare RGB 104020048"
    //% block="Verkettbare RGB bei Clock Pin %clkPin|und Daten Pin %dataPin|mit  %numberOfLeds RGBs"
    //% trackArgs=0,2
    //% blockSetVariable=Kette
    //% clkPin.defl=DigitalPin.P0 dataPin.defl=DigitalPin.P14 numberOfLeds.defl=1
    export function createChain(clkPin: DigitalPin, dataPin: DigitalPin, numberOfLeds: number = 1): Chain {
        return chain.init(clkPin, dataPin, numberOfLeds) 
    }

    //% subcategory="LED" weight=89 
    //% group="Verkettbare RGB 104020048"
    export function setOneRGB(numberOfLED: number, red: number, green: number, blue: number) {
        return chain.setColorJustOne(numberOfLED, red, green, blue);
    }

    //% subcategory="LED" weight=88 
    //% group="Verkettbare RGB 104020048"
    export function setColorWholeChain(red: number, green: number, blue: number) {
        return chain.setColorChain(red, green, blue);
    }

//--------------------------------------------------------------------------------------------------------

    /**
     * Activate electromagnet
    */
    //% subcategory="Elektromagnet" weight=31 
    //% group="Elektromagnet 101020073"
    //% block="Elektromagnet ein |%pin"
    export function electromagnetEin(pin: DigitalPin) {

        pins.digitalWritePin(pin, 1);
        basic.pause(50);
    }
    /**
     * Deactivate electromagnet
    */
    //% subcategory="Elektromagnet" weight=30 
    //% group="Elektromagnet 101020073"
    //% block="Elektromagnet aus |%pin"
    export function electromagnetAus(pin: DigitalPin) {

        pins.digitalWritePin(pin, 0);
        basic.pause(50);
    }

//--------------------------------------------------------------------------------------------------------

    /**
     * Activate relay
    */
    
    //% subcategory="Relais" weight=29 
    //% group="Relais 103020005 "
    //% block="Relais ein |%pin"
    export function relaisEin(pin: DigitalPin) {

        pins.digitalWritePin(pin, 1);
        basic.pause(50);
    }
    /**
     * Deactivate relay
    */
    //% subcategory="Relais" weight=28 
    //% group="Relais 103020005 "
    //% block="Relais aus |%pin"
    export function relaisAus(pin: DigitalPin) {

        pins.digitalWritePin(pin, 0);
        basic.pause(50);
    }

    //--------------------------------------------------------------------------------------------------------

    //% subcategory="Display" weight=20 
    //% group="OLED Display 0.96'', SSD1306"
    //% block="init Display Breite %width Höhe %height"
    //% width.defl=128
    //% height.defl=64
    export function displayInit(width: number, height: number){
        return OLED.init(width, height);
    }

    //% subcategory="Display" weight=19 
    //% group="OLED Display 0.96'', SSD1306"
    //% block="schreibe String %str"
    export function displayWriteStr(str: string){
        return OLED.writeString(str);
    }

    //% subcategory="Display" weight=18 
    //% group="OLED Display 0.96'', SSD1306"
    //% block="schreibe Nummer %num"
    export function displayWriteNum(num: number) {
        return OLED.writeNum(num);
    }

    //% subcategory="Display" weight=17 
    //% group="OLED Display 0.96'', SSD1306"
    //% block="schreibe String und Zeilenumbruch %str"
    export function displayWriteStrNewLine(str: string) {
        return OLED.writeStringNewLine(str);
    }

    //% subcategory="Display" weight=16 
    //% group="OLED Display 0.96'', SSD1306"
    //% block="schreibe Nummer und Zeilenumbruch %num"
    export function displayWriteNumNewLine(num: number) {
        return OLED.writeNumNewLine(num);
    }

    //% subcategory="Display" weight=15 
    //% group="OLED Display 0.96'', SSD1306"
    //% block="Zeilenumbruch"
    export function displayNewLine() {
        return OLED.newLine();
    }

    //% subcategory="Display" weight=14 
    //% group="OLED Display 0.96'', SSD1306"
    //% block="Lösche Displayinhalt"
    export function displayClear(){
        return OLED.clear();
    }

    //% subcategory="Display" weight=13 
    //% group="OLED Display 0.96'', SSD1306"
    //% block="zeichne Ladebalken bei %percent Prozent"
    export function displayLoadingBar(percent: number){
        return OLED.drawLoading(percent);
    }

    //% subcategory="Display" weight=12 
    //% group="OLED Display 0.96'', SSD1306"
    //% block="zeichne Linie von:|x: %x0 y: %y0 bis:| x: %x1 y: %y1""
    export function displayDrawLine(x0: number, y0: number, x1: number, y1: number)  {
        return OLED.drawLine(x0,y0,x1,y1);
    }

    //% subcategory="Display" weight=11 
    //% group="OLED Display 0.96'', SSD1306"
    //% block="zeichne Rechteck von:|x: %x0 y: %y0 bis:| x: %x1 y: %y1""
    export function displaydrawRectangle(x0: number, y0: number, x1: number, y1: number) {
        return OLED.drawRectangle(x0, y0, x1, y1);
    }

    //--------------------------------------------------------------------------------------------------------

    //% subcategory="Schaltschwein" weight=19 
    //% group="Prog. Empfängerschwein"
    //% block="Schalte Steckdose auf der %ch %state"
    export function myProgramReceiver(rfGroupID: MyEnumGroupIDs): void {
        pig.programReceiver(rfGroupID);
    }

    //% subcategory="Schaltschwein" weight=18 
    //% group="Prog. Fernsteuerung"
    //% block="Schalte Steckdose auf der %ch %state"
    export function mySwitchPlug(ch: MyEnumPlugLabel, state: MyEnumState): void {
        pig.switchPlug(ch, state);
    }

    //% subcategory="Schaltschwein" weight=17 
    //% group="Prog. Fernsteuerung"
    //% block="Schalte Steckdose auf der %ch %state"
    export function mySelectRfGroupID(rfGroupID: MyEnumGroupIDs): void {
        pig.selectRfGroupID(rfGroupID);
    }
}