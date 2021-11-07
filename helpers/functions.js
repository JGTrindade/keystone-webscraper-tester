'use strict';

export function removeURLPath(urls, expression) {
    let defaultDomains = [];
    for (const url of urls) {
        defaultDomains.push(url.split(expression));
    }

    defaultDomains.forEach(element => {
        element.pop();
    });

    let defaultDomainsCopy = [];
    defaultDomains = defaultDomainsCopy.concat(...defaultDomains);

    return defaultDomains;
}