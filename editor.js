import CRDT from './crdt';
import Rx from 'rxjs/Rx';
import EventEmitter from "events";

class Editor extends EventEmitter {
    constructor(editor) {
        super();
        this.editor = editor;
        this.mainPage = new CRDT(Math.floor(Math.random() * 1000));
        this.callEvents()
    }


    callEvents() {
        this.InsertEvents();
        this.DeleteEvents();
    }

    InsertEvents() {
        const textbox = Rx.Observable.fromEvent(this.editor, 'keydown');
        textbox.subscribe(e => {
            const char = e.key;
            const index = e.target.value.length;
            const insertedChar = this.mainPage.localInsert(char, index);
            this.emit('localInsert', insertedChar);
        })
    }

    DeleteEvents() {
        const textbox = Rx.Observable.fromEvent(this.editor, 'keydown');
        textbox
            .filter(ev => ev.key === 'backspace')
            .subscribe(e => {
                const index = e.target.value.length;
                const deleteChar = this.mainPage.localDelete(index);
                this.emit('localDelete', deleteChar)
            })
    }

    remoteChangeEvt() {
        this.model.on('remoteChange', () => {
            this.editor.value = this.mainPage.text;
        });
    }
}

export {
    Editor
}
