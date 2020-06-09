const { gtag } = require('./state.json');

document.head.appendChild(Object.assign(document.createElement('script'), {
    async: true,
    src: `https://www.googletagmanager.com/gtag/js?id=${gtag}`
}));

window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || ((...arguments) => window.dataLayer.push(arguments));

window.gtag('js', new Date());
window.gtag('config', gtag);