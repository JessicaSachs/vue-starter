module.exports = {
    presets: [
        '@vue/app'
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', {
            regenerator: true,
            ignore: ['node_modules/@babel/runtime'],
        }],
        ['@babel/plugin-syntax-dynamic-import'],
        ['@babel/plugin-transform-shorthand-properties'],
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        ['@babel/plugin-proposal-class-properties', {loose: true}]
    ],
}
