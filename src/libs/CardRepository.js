import { readFileSync } from 'node:fs';
import { parse } from "csv-parse/sync";

const csvLoader = (csvFile) => {
    const cardCsv = readFileSync(csvFile, { encoding: 'utf-8' });
    return parse(cardCsv, {
        columns: true,
        skip_empty_lines: true
    });
};

export default {
    allCharacter() {
        return csvLoader('./src/cards/characters.csv');
    },

    allInventory() {
        return csvLoader('./src/cards/inventory.csv');
    },

    allExecutable() {
        return csvLoader('./src/cards/executable.csv');
    },

    allPlanets() {
        return csvLoader('./src/cards/planets.csv');
    },
}