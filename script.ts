import { gtag, media, title } from './state.json';

document.head.appendChild(Object.assign(document.createElement('script'), {
    async: true,
    src: `https://www.googletagmanager.com/gtag/js?id=${gtag}`
}));

(window => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push('js', new Date());
    window.dataLayer.push('config', gtag);
})(window as Window & typeof globalThis & { dataLayer: any[] });

const skip = new URL(location.href).searchParams.get('_');

window.addEventListener('load', () => {
    document.title = title;

    Object.keys(media).sort(() => 0.5 - Math.random()).forEach(name => {

        if (name == skip) {
            return;
        }

        document.body.appendChild(Object.assign(document.createElement('a'), {
            innerText: name,
            href: `https://${media[name]}`
        }));

    });

});