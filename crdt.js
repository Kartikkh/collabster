class CRDT {
    constructor(id) {
        this.siteId = id;
        this.struct = []; // this struct store the whole document
    }

    localInsert(val,index){
       const posBefore = this.struct[index-1].position;
       const posAfter = this.struct[index].position;

    }

    localDelete(position){
        this.struct.splice(position,1)
    }

    remoteInsert(){

    }

    remoteDelete(){

    }

}

class Identifier{
    constructor(siteId, siteCounter) {
        this.siteId = siteId; // uniqueId assign to each client
        this.siteCounter = siteCounter;
    }
}

class Character{
    constructor(value , counter, identifiers) {
        this.position = identifiers;
        this.lamportClock = counter;
        this.value = value;
    }
}

const id1 = new Identifier(1, 1);
const id2 = new Identifier(2, 1);

const char1 = new Character('A', 1, [id1]);
const char2 = new Character('B', 2, [id2]);
