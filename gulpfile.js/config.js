const dest = 'public';
const src = 'src';
const templatePath = `${src}/templates`;
const cssPath = `${src}/styles`;
const imgPath = `${src}/img`;
const jsPath = `${src}/js`;

module.exports = {
    dest,
    src,
    sass: {
        dest: `${dest}/css`,
        destName: '/main.css',
        sassFiles: [
            `${cssPath}/main.scss`,
        ],
        opts: {
        },
    },

};