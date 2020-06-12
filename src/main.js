import Vue     from 'vue'
import App     from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)

Vue.config.productionTip = false

new Vue({
    vuetify,
    i18n,
    render: h => h(App),
}).$mount('#app')
