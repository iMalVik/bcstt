module.exports = {
    publicPath: './',
    outputDir: 'dist',
    indexPath: 'index.html',
    
    transpileDependencies: [
        'vuetify',
    ],

    pluginOptions: {
        i18n: {
            locale: 'ru',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true,
        },
    },
}
