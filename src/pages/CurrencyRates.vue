<template lang="pug">
    .currency-rates
        v-card
            v-card-title.pt-2.pb-2
                h2  {{$t('currencyRates.title')}}
            table-rates(:headers='headers')
</template>

<script>
    import TableRates from '@/components/TableRates'

    export default {
        name: 'CurrencyRates',
        components: { TableRates },
        data: () => ({}),
        computed: {
            headers () {
                return [
                    { text: this.$t('currencyRates.headers.lineNumber'), align: 'start', value: 'ID' },
                    { text: this.$t('currencyRates.headers.currencyLetterCode'), value: 'Cur_Abbreviation' },
                    { text: this.$t('currencyRates.headers.currencyName'), value: 'Cur_Name' },
                    { text: this.$t('currencyRates.headers.numberOfCurrencyUnits'), value: 'Cur_Scale' },
                    { text: this.$t('currencyRates.headers.courseToBelRuble'), value: 'Cur_OfficialRate' },
                    { value: 'actions', sortable: false },
                ]
            },
        },
    }
</script>

<style lang="scss">
    .currency-rates {
        padding: 4px;
    }
</style>
