import Parser from "./Parser.js";
import Domain from "./Domain.js";

export default class Sitemap {

    #defaultURLs = [];

    defaultIndexes = [
        'https://www.bachelorstudies.com/sitemap.xml',
        'https://www.masterstudies.com/sitemap.xml',
        'https://www.phdstudies.com/sitemap.xml',
        'https://www.lawstudies.com/sitemap.xml',
        'https://www.mbastudies.com/sitemap.xml',
        'https://www.healthcarestudies.com/sitemap.xml',
        'https://www.academiccourses.com/sitemap.xml',
        'https://www.onlinestudies.com/sitemap.xml'
    ]

    #localizedIndexes = [];

    #localizedURLs = [];

    async getDefaultURLs() {
        const parser = new Parser();

        for (const url of this.defaultIndexes) {
            this.#defaultURLs.push(await parser.parse(url));
        }
        return this.#defaultURLs;
    }

    async getLocalizedURLs() {
        const parser = new Parser();

        this.#localizedIndexes = await this.getLocalizedSitemapIndexes();

        for (const url of this.#localizedIndexes) {
            this.#localizedURLs.push(await parser.parse(url));
        }
        return this.#localizedURLs;
    }

    async getLocalizedSitemapIndexes() {
        const domain = new Domain(this);
        const defaultDomains = domain.getDefaultURLs();
        let localizedDomains = await domain.getLocalizedDomains(defaultDomains);
        for (const localizedDomain of localizedDomains) {
            this.#localizedIndexes.push(localizedDomain + 'sitemap.xml');
        }
        return this.#localizedIndexes;
    }

}