interface Card {
    TITLE: string;
    subtitle: string;
    Power: string;
    'Enter Cost': string;
    'Game Text': string;
    Flavorlogue: string;
    Stars: string;
    'Art Credit': string;
    Picture: string;
    'Set Release': string;
    'Card Number': string;
    [propName: any]: any
}

interface CharacterCard extends Card {
    Tags: string;
}

interface InventoryCard extends Card {
    // Nothing extra at this time
}

interface ExecutableCard extends Card {
    // Nothing extra at this time
}

interface PlanetCard extends Card {
    'Max Damage': string,
    'Draw Boost': string,
}

declare type _default = {
    allCharacter(): CharacterCard[],
    allInventory(): InventoryCard[],
    allExecutable(): ExecutableCard[],
    allPlanets(): PlanetCard[],
};

export { CharacterCard, InventoryCard, ExecutableCard, PlanetCard, Card };
export default _default;