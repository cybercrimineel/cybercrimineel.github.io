import { media, title } from './state.json';

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