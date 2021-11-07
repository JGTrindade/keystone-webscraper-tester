'use strict';

import { removeURLPath } from "./helpers/functions.js";
import Parser from "./classes/Parser.js";
import HTMLFetcher from "./classes/HTMLFetcher.js";

const parser = new Parser();
const htmlFetcher = new HTMLFetcher();

// Sitemapindexes for default domains (American English).
let defaultSiteMapIndexes = [
    'https://www.bachelorstudies.com/sitemap.xml',
    'https://www.masterstudies.com/sitemap.xml',
    'https://www.phdstudies.com/sitemap.xml',
    'https://www.lawstudies.com/sitemap.xml',
    'https://www.mbastudies.com/sitemap.xml',
    'https://www.healthcarestudies.com/sitemap.xml',
    'https://www.academiccourses.com/sitemap.xml',
    'https://www.onlinestudies.com/sitemap.xml'
];

// Default domains (American English).
let defaultDomains = removeURLPath(defaultSiteMapIndexes, '/sitemap.xml');


// // Loop through all domains and save the sitemaps contained in each sitemapindex.
let defaultSiteMaps = [];
for (const site of defaultSiteMapIndexes) {
    defaultSiteMaps.push(await parser.parse(site));
}
// console.log(defaultSiteMaps);
// console.log(defaultDomains);

// All domains. TODO: remove American English.
let l10ndomains = [];

// let htmlfile = await htmlFetcher.getFile('https://www.bachelorstudies.com/');
// console.log(htmlfile);

for (let index = 0; index < defaultDomains.length; index++) {
    let htmlfile = await htmlFetcher.getFile(defaultDomains[index]);
    let hreflangs = htmlfile.querySelectorAll('link[hreflang]');
    hreflangs.forEach(element => {
        l10ndomains.push(element.getAttribute('href'));
    });
}
console.log(l10ndomains);


