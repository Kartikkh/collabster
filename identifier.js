class Identifier {
    constructor(siteId, siteCounter) {
        this.siteId = siteId; // uniqueId assign to each client
        this.siteCounter = siteCounter;
    }

    sortIdentifier(pos1) {
        let id1 = this.siteCounter;
        let id2 = pos1.siteCounter;
        if (id1 < id2)
            return 1;
        else if (id1 > id2)
            return -1;
        else{
            if (id1.siteId < id2.siteId){
                return -1;
            }else if(id1.siteId > id2.siteId){
                return 1;
            }
            return 0;
        }
    }
}

export {
    Identifier
}
