const state = require('./state.json');

require('pug').renderFile('./index.pug', Object.assign(state, {filters: {
    'script': function (text, options) {
        delete options.filename;
        return '<script>' + require('uglify-js').minify(
            eval('`' + text + '`'),
            options
        ).code + '</script>';
    },
    'style': function (text, options) {
        return '<style>' + require('sass').renderSync(Object.assign(options, {
            data: text,
            indentedSyntax: true,
            outputStyle: 'compressed'
        })).css.toString() + '</style>';
    }
}}),
    function (err, html) {
        if (err) throw err;
        process.stdout.write(html.replace(/\r?\n/g, ' '));
    }
);