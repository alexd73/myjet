// TODO Сделать отображение набора кнопок

export enum ButtonFlags {
    none    = 0,
    close   = 1 << 0,
    ok      = 1 << 1,
    cancel  = 1 << 2
}


export class ButtonsSet {
    btns: ButtonFlags;

    constructor(b = { flags: ButtonFlags.close }) {
        this.btns = b.flags;

        if (this.btns & ButtonFlags.ok) {
            console.log('Ok');
        }
        if (this.btns & ButtonFlags.cancel) {
            console.log('Cancel')
        }
        if (this.btns & ButtonFlags.close) {
            console.log('Close')
        }
        if (this.btns = ButtonFlags.none) {
            console.log('no buttons')
        }
    }

    render(){

    }

}