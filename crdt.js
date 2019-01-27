import {Identifier} from "./identifier";
import {Character} from "./char";

class CRDT {
    constructor(id, base = 32, boundary = 10) {
        this.siteId = id;
        this.struct = []; // this structure store the whole document
        this.base = base;
        this.boundary = boundary
    }

    static selectBoundary() {
        let boundary = Math.floor(Math.random() * 2);
        if (boundary) {
            return "+"
        }
        return "-"
    }
    
    localInsert(val, index) {
        const posBefore = this.struct[index - 1].position;
        const posAfter = this.struct[index].position;
        this.generatePosBetween(posBefore, posAfter)
    }

    generatePosBetween(posBefore, posAfter, newPos = [], level = 0) {

        posBefore = posBefore[0] || new Identifier(this.siteId, 0);
        posAfter = posAfter[0] || new Identifier(this.siteId, 10);
        let boundaryCondition = this.selectBoundary();
        if (posAfter.siteCounter - posBefore.siteCounter > 1) {
            let newDigit = this.generateIdBetween(posBefore.siteCounter, posAfter.siteCounter, boundaryCondition);
            newPos.push(new Identifier(newDigit, this.siteId));
            return newPos;
        } else if (posAfter.siteCounter - posBefore.siteCounter <= 1) {
            this.generateIdBetween(posBefore, posAfter, newPos, level++)
        }
        if (posBefore.siteCounter === posAfter.siteCounter) {
            if (posBefore.siteId < posAfter.siteId) {

            }
        }
    }

    generateIdBetween(min, max, boundaryCondition) {
        // if boundary > max - min then select (min+1.....max)
        if (max - min > this.boundary) {
            min = min + 1;
        } else {
            // if mix-min < boundary and if boundary condition is +
            // then change max = boundary such that location of newDigit would be (min+1 .... boundary)
            if (boundaryCondition === "+") {
                min = min + 1;
                max = this.boundary;
            } else {
                min = max - this.boundary;
            }
        }
        return Math.floor(Math.random() * (max - min) + min);
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
