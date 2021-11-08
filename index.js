'use strict';

import Sitemap from "./classes/Sitemap.js";
import Domain from "./classes/Domain.js";

const sitemap = new Sitemap();
const domain = new Domain(sitemap);

let defaultSitemaps = await sitemap.getDefaultURLs();
console.log(defaultSitemaps);

// Default domains (American English).
let defaultDomains = domain.getDefaultURLs();

// All domains except American English. TODO: remove American English.
let localizedDomains = await domain.getLocalizedDomains(defaultDomains);