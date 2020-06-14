<template lang="pug">
    .menu-locales
        v-menu(bottom, origin='center center', transition='scale-transition')
            template(v-slot:activator='{ on, attrs }')
                v-btn(text v-bind='attrs', v-on='on')
                    country-flag.ma-0.pa-0(:country="$t('iconLang')" left )
                    .mr-2 {{$t('lang')}}
            v-list()
                v-list-item( v-for='(item, i) in locales', :key='i', @click='changeLocale(item)')
                    country-flag.width-flag.ma-0.pa-0(:country='item.icon' left)
                    v-list-item-title.styleLocaleName {{ item.name.toUpperCase() }}
</template>

<script>
    export default {
        name: 'MenuLocales',
        data: () => ({
            locales: [{ name: 'English', icon: 'gb', lang: 'en' }, { name: 'Русский', icon: 'ru', lang: 'ru' }],

        }),
        methods: {
            changeLocale (locale) {
                this.$vuetify.lang.current = locale.lang
                this.$i18n.locale = locale.lang
                this.iconLang = locale.icon
            },
        },
    }
</script>

<style scoped lang="scss">
    .v-menu__content .v-list .v-list-item .width-flag {
            width: 90px !important;
    }
    .styleLocaleName {
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.0892857143em;
        text-indent: 0.0892857143em;
    }
</style>
