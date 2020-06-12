<template>
  <v-app>
    <v-content>
      <CurrencyRates />
    </v-content>
  </v-app>
</template>

<script>
    import CurrencyRates from '@/pages/CurrencyRates'

    export default {
        name: 'App',

        components: {
            CurrencyRates,
        },

        data: () => ({
            //
        }),
    }
</script>
