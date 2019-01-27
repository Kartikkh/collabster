class Character{
    constructor(value , counter, identifiers) {
        this.position = identifiers;
        this.lamportClock = counter;
        this.value = value;
    }
}

export {
    Character
}
