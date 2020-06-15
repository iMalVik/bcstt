<template lang="pug">
    .menu-locales
        v-menu(bottom, origin='center center', transition='scale-transition' offset-y)
            template(v-slot:activator='{ on, attrs }')
                v-btn(text block v-bind='attrs', v-on='on')
                    country-flag(:country="$t('iconLang')" left )
                    .d-none.d-sm-block.mr-2.styleLocaleName {{$t('lang')}}
            v-list(dense)
                v-list-item( v-for='(item, i) in locales', :key='i', @click='changeLocale(item)')
                    country-flag.width-flag(:country='item.icon' left)
                    v-list-item-title.styleLocaleNames {{ item.name.toUpperCase() }}

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
    .styleLocaleName {
        width: 75px;
    }
    .styleLocaleNames {
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.0892857143em;
        text-indent: 0.0892857143em;
        flex: unset;
    }
</style>
