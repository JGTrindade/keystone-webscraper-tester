import XMLFetcher from "./XMLFetcher.js";

export default class Parser {

    parse(file) {

        const XMLfetcher = new XMLFetcher();
        let sitemapIndexURLs = XMLfetcher.getFile(file).then(document => {
            let locTags = document.getElementsByTagName('loc');
            let URLs = [];
            for (let loc of locTags) {
                URLs.push(loc.textContent);
            }
            return URLs;
        });
        return sitemapIndexURLs;
    }
}