<template>
    <v-app>
        <v-navigation-drawer app clipped v-model="drawer">
            <v-list dense>
                <v-list-item link :href="appReadme" target="_blank">
                    <v-list-item-action class="mr-2">
                        <v-icon>mdi-open-in-new</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ $t('appTaskDescription') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link :href="appSources" target="_blank">
                    <v-list-item-action class="mr-2">
                        <v-icon>mdi-github</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ $t('appSources') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-subheader class="mt-4 grey--text text--darken-1">
                    {{ $t('developer') }}
                </v-subheader>
                <v-list-item>
                    <v-list-item-avatar>
                        <img :src="authorIcon" alt="">
                    </v-list-item-avatar>
                    <v-list-item-title>
                        {{ $t('author') }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dense clipped-left :src="srcAppBabBackground">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>{{ $t('appName') }}</v-toolbar-title>
            <v-spacer />
            <BtnMenuTheme />
            <BtnMenuLocales />
        </v-app-bar>
        <v-container fluid class="pa-1 pa-sm-3">
            <v-content>
                <CurrencyRates />
            </v-content>
        </v-container>
    </v-app>
</template>

<script>
    import CurrencyRates  from '@/pages/CurrencyRates'
    import BtnMenuTheme   from './components/BtnTheme'
    import BtnMenuLocales from './components/BtnMenuLocales'

    export default {
        name: 'App',

        components: {
            BtnMenuTheme,
            BtnMenuLocales,
            CurrencyRates,
        },

        data: () => ({
            drawer: null,
            appReadme: process.env.VUE_APP_README,
            appSources: process.env.VUE_APP_SOURCES,
            authorIcon: process.env.VUE_APP_AUTHOR_ICON || process.env.VUE_APP_AUTHOR_ICON_DEFAULT,
        }),
        computed: {
            srcAppBabBackground () { return this.$vuetify.theme.dark ? process.env.VUE_APP_BAR_BACKGROUND : '' },
        },
    }
</script>
