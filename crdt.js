class CRDT {
    constructor(id) {
        this.siteId = id;
        this.struct = []; // this struct store the whole document
    }

    localInsert(val,index){
       const posBefore = this.struct[index-1].position;
       const posAfter = this.struct[index].position;
       generatePosBetween(posBefore,posAfter)
    }

    generatePosBetween(posBefore, posAfter){
        if (posBefore.length === 0) {
            return new Identifier(this.siteId, 0)
        }
        else if (posAfter[0].siteCounter - posBefore[0].siteCounter > 1 ){
            let newPos =  Math.floor((posAfter[0].siteCounter - posBefore[0].siteCounter)/2)
            return new Identifier(this.siteId , newPos)
        }
        else if (posAfter[0].siteCounter - posBefore[0].siteCounter <= 1){

        }

        if (posBefore[0].siteCounter === posAfter[0].siteCounter) {
            if (posBefore[0].siteId < posAfter[0].siteId){

            }
        }


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
        //this.position = identifiers;
        this.lamportClock = counter;
        this.value = value;
    }
}

const id1 = new Identifier(1, 1);
const id2 = new Identifier(2, 1);

const char1 = new Character('A', 1, [id1]);
const char2 = new Character('B', 2, [id2]);
