import Vue        from 'vue'
import Vuetify    from 'vuetify/lib'
import VueI18n    from 'vue-i18n'
import { en, ru } from '../i18n/vuetify/'

Vue.use(Vuetify)
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'ru',
    messages: {
        en,
        ru,
    },
})

export default new Vuetify({
    lang: {
        t: (key, ...params) => i18n.t(key, params),
    },
})
