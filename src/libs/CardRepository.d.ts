interface Card {
    TITLE: string;
    subtitle: string;
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
    'Enter Cost': string;
    Power: string;
    Tags: string;
}

interface InventoryCard extends Card {
    'Enter Cost': string;
}

interface ExecutableCard extends Card {
    // Nothing extra at this time
}

interface PlanetCard extends Card {
    'Max Damage': string,
    Power: string;
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