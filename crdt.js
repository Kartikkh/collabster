import {Identifier} from "./identifier";
import {Character} from "./char";

class CRDT {
    constructor(id, base = 32, boundary = 10) {
        this.siteId = id;
        this.struct = []; // this struct store the whole document
        this.base = base;
        this.boundary = boundary
    }

    localInsert(val, index) {
        const posBefore = this.struct[index - 1].position;
        const posAfter = this.struct[index].position;
        this.generatePosBetween(posBefore, posAfter)
    }

    generatePosBetween(posBefore, posAfter, newPos = [], level = 0) {

        posBefore = posBefore[0] || new Identifier(this.siteId, 0);
        posAfter = posAfter[0] || new Identifier(this.siteId, 10);

        if (posAfter.siteCounter - posBefore.siteCounter > 1) {
            let newDigit = this.generateIdBetween(posBefore.siteCounter, posAfter.siteCounter, boundaryStrategy);
            newPos.push(new Identifier(newDigit, this.siteId));
            return newPos
        } else if (posAfter.siteCounter - posBefore.siteCounter <= 1) {

        }
        if (posBefore.siteCounter === posAfter.siteCounter) {
            if (posBefore.siteId < posAfter.siteId) {

            }
        }
    }

    generateIdBetween(min, max, boundaryStrategy) {
        if (max-min > this.boundary){
            min = min+1;
        }else{
            if (boundaryStrategy === "-"){
                
            }else{

            }
        }
        return Math.floor(Math.random())
    }

    selectBoundary() {

    }

    localDelete(position) {
        this.struct.splice(position, 1)
    }

    remoteInsert() {

    }

    remoteDelete() {

    }
}


const id1 = new Identifier(1, 1);
const id2 = new Identifier(2, 1);

const char1 = new Character('A', 1, [id1]);
const char2 = new Character('B', 2, [id2]);
