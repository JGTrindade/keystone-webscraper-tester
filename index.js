'use strict';

import Sitemap from "./classes/Sitemap.js";
import Domain from "./classes/Domain.js";

const sitemap = new Sitemap();
const domain = new Domain(sitemap);

let defaultSitemaps = await sitemap.getDefaultURLs();

// Default domains (American English).
let defaultDomains = domain.getDefaultURLs();

// All domains except American English.
let localizedDomains = await domain.getLocalizedDomains(defaultDomains);