<template lang="pug">
    .btn-theme
        v-tooltip(bottom)
            template(v-slot:activator="{ on, attrs }")
                v-btn( block text @click='changeTheme' v-bind="attrs" v-on="on")
                    .styleThemeIcon(:style='themeNow.style')
                    .mr-2.d-none.d-sm-block  {{ themeNow.name }}
            span {{$t('theme.theme')}}
</template>

<script>
    export default {
        name: 'BtnMenuTheme',
        data: () => ({}),
        computed: {
            themeNow () {
                const isDark = this.$vuetify.theme.dark
                return {
                    name: this.$t('theme.' + (isDark ? 'dark' : 'light')),
                    style: { backgroundColor: isDark ? 'black' : 'white' },
                }
            },
        },
        methods: {
            changeTheme () {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            },
        },
    }
</script>

<style scoped lang="scss">
    .btn-theme {
        margin-right: 8px;
    }

    .styleThemeIcon {
        min-width: 30px;
        min-height: 20px;
        margin-right: 15px;
        margin-left: 15px;
        box-shadow: 0 0 2px rgba(0,0,0);
    }
</style>
