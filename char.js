class Character {
    constructor(value, counter, identifiers) {
        this.position = identifiers;
        this.lamportClock = counter;
        this.value = value;
    }

    compareToChar(char) {
        const pos1 = this.position;
        const pos2 = char.position;
        for (let i = 0; i < Math.min(pos1.length || pos2.length); i++) {
                pos1[i].sortIdentifier(pos2[i])
        }
    }
}

export {
    Character
}
