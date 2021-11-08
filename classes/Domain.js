import Sitemap from "./Sitemap.js";
import HTMLFetcher from "./HTMLFetcher.js";

export default class Domain {

    constructor(sitemap) {
        this.sitemap = sitemap
    }

    #defaultURLs = [];
    #localizedDomains = [];

    getDefaultURLs() {
        let sitemap = new Sitemap();

        for (const url of sitemap.indexes) {
            this.#defaultURLs.push(url.split('/sitemap.xml'));
        }
    
        this.#defaultURLs.forEach(element => {
            element.pop();
        });
    
        let defaultURLSCopy = [];
        this.#defaultURLs = defaultURLSCopy.concat(...this.#defaultURLs);
    
        return this.#defaultURLs;
    }

    async getLocalizedDomains(defaultDomains) {
        const htmlFetcher = new HTMLFetcher();

        for (let index = 0; index < defaultDomains.length; index++) {
            let htmlfile = await htmlFetcher.getFile(defaultDomains[index]);
            let hreflangs =  htmlfile.querySelectorAll('link[hreflang]');
            hreflangs.forEach(element => {
                this.#localizedDomains.push(element.getAttribute('href'));
            });
        }
        return this.#localizedDomains;
    }

}