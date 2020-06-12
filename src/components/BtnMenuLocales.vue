<template lang="pug">
    .menu-locales
        v-menu(bottom, origin='center center', transition='scale-transition')
            template(v-slot:activator='{ on, attrs }')
                v-btn(text v-bind='attrs', v-on='on')
                    country-flag.m-0.p-0(:country="$t('iconLang')" left )
                    .mr-2 {{$t('lang')}}
            v-list()
                v-list-item( v-for='(item, i) in locales', :key='i', @click='changeLocale(item)')
                    country-flag.width-full(:country='item.icon' left)
                    v-list-item-title {{ item.name }}
</template>

<script>
    export default {
        name: 'MenuLocales',
        data: () => ({
            locales: [{ name: 'English', icon: 'gb', lang: 'en' }, { name: 'Русский', icon: 'ru', lang: 'ru' }],

        }),
        methods: {
            changeLocale (locale) {
                this.$i18n.locale = locale.lang
                this.iconLang = locale.icon
            },
        },
    }
</script>

<style scoped lang="scss">
    .v-menu__content .v-list .v-list-item .width-full {
            width: 100% !important;
    }
</style>
