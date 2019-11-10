require('pug').renderFile(
    './index.pug',
    Object.assign(require('./state.json'), {
        filters: {'style': function (text, options) {
            return '<style>' + require('sass').renderSync(Object.assign(options, {
                data: text,
                indentedSyntax: true,
                outputStyle: 'compressed'
            })).css.toString() + '</style>';
        }}
    }),
    function (err, html) {
        if (err) throw err;
        process.stdout.write(html.replace(/\r?\n/g, ' '));
    }
);