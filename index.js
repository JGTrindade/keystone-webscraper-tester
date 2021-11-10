'use strict';

import Sitemap from "./classes/Sitemap.js";
import Domain from "./classes/Domain.js";

const sitemap = new Sitemap();
const domain = new Domain(sitemap);

// let defaultSitemaps = await sitemap.getDefaultURLs();
// let localizedSitemapIndexes = await sitemap.getLocalizedSitemapIndexes();
// let localizedSitemaps = await sitemap.getLocalizedURLs();

// Default domains (American English).
// let defaultDomains = domain.getDefaultURLs();

// All domains except American English.
// let localizedDomains = await domain.getLocalizedDomains(defaultDomains);

// console.log(defaultSitemaps);
// console.log(defaultDomains);
// console.log(localizedDomains);
// console.log(localizedSitemapIndexes);
// console.log(localizedSitemaps);