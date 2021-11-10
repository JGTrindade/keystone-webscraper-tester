import HTMLFetcher from "./HTMLFetcher.js";

export default class Domain {

    constructor(sitemap) {
        this.sitemap = sitemap
    }

    #defaultURLs = [];
    #localizedDomains = [];

    getDefaultURLs() {

        for (const url of this.sitemap.defaultIndexes) {
            this.#defaultURLs.push(url.split('sitemap.xml'));
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
        // Filter out American English domains.
        this.#localizedDomains = this.#localizedDomains.filter(localizedDomain => !defaultDomains.includes(localizedDomain));
        return this.#localizedDomains;
    }

}