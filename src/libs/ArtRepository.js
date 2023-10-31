export default {
    loadAll(cardArt) {
        // const cardArt = await Astro.glob('../../cards/images/*.png');

        /** When building for real, the filenames will contain a cache-buster segment, e.g. Set1_Chara001.3c3d8a15.png */
        const cacheBusterExtractor = /(\..*)\./;
        const fileNameExtractor = /\/([^\/]*\.png)/;

        return Object.fromEntries(cardArt.map((art) => {
            const imageName = art.default.src.match(fileNameExtractor)[1].replace(cacheBusterExtractor, '.');

            return [imageName, art.default];
        }));
    }
}
