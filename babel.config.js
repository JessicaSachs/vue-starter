module.exports = {
    presets: [
        '@vue/app'
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', {
            regenerator: true,
            ignore: ['src/javascripts/pop/**/*.es5.js', 'node_modules/@babel/runtime'],
        }],
        ['@babel/plugin-syntax-dynamic-import'],
        ['@babel/plugin-transform-shorthand-properties'],
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        ['@babel/plugin-proposal-class-properties', {loose: true}]
    ],
}
