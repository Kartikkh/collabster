class Identifier{
    constructor(siteId, siteCounter ) {
        this.siteId = siteId;
        this.siteCounter = siteCounter;
    }
}

class Character{
    constructor(value , counter, position) {
        this.position = position;
        this.lamportClock = counter;
        this.value = value;
    }
}

const id1 = new Identifier(1, 1);
const id2 = new Identifier(2, 1);

const char1 = new Character('A', 1, [id1]);
const char2 = new Character('B', 2, [id2]);
