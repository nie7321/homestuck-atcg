interface Card {
    TITLE: string;
    subtitle: string;
    'Game Text': string;
    Flavorlogue: string;
    Stars: string;
    'Art Credit': string;
    'Set Release': string;
    'Card Number': string;
    [propName: any]: any
}

interface CharacterCard extends Card {
    'Enter Cost': string;
    Power: string;
    Tags: string;
    Picture: string;
}

interface InventoryCard extends Card {
    'Enter Cost': string;
    Picture: string;
}

interface ExecutableCard extends Card {
    Picture: string;
}

interface PlanetCard extends Card {
    'Max Damage': string,
    Power: string;
    'Draw Boost': string,
    Pictures: string;
}

declare type _default = {
    allCharacter(): CharacterCard[],
    allInventory(): InventoryCard[],
    allExecutable(): ExecutableCard[],
    allPlanets(): PlanetCard[],
};

export { CharacterCard, InventoryCard, ExecutableCard, PlanetCard, Card };
export default _default;