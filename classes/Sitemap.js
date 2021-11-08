import Parser from "./Parser.js";

export default class Sitemap {

    #defaultURLs = [];

    indexes = [
        'https://www.bachelorstudies.com/sitemap.xml',
        'https://www.masterstudies.com/sitemap.xml',
        'https://www.phdstudies.com/sitemap.xml',
        'https://www.lawstudies.com/sitemap.xml',
        'https://www.mbastudies.com/sitemap.xml',
        'https://www.healthcarestudies.com/sitemap.xml',
        'https://www.academiccourses.com/sitemap.xml',
        'https://www.onlinestudies.com/sitemap.xml'
    ]

    async getDefaultURLs() {
        const parser = new Parser();

        for (const url of this.indexes) {
            this.#defaultURLs.push(await parser.parse(url));
        }
        return this.#defaultURLs;
    }

}