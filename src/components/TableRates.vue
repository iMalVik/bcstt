<template lang="pug">
    v-data-table.elevation-17(:headers='headers', :items='rates', sort-by='ID' multi-sort :search="search" :loading='isLoading' :loading-text="this.$t('currencyRates.loadingText')")
        template(v-slot:top='')
            v-toolbar(flat)
                div
                    hr.mb-2.mt-2(color='lightgrey')
                    v-dialog(v-model='isDialog', max-width='500px')
                        template(v-slot:activator='{ on, attrs }')
                            v-btn.mb-2.mr-4( v-bind='attrs', v-on='on' :disabled="isLoading")
                                v-icon(left color='grey' ) mdi-plus
                                | {{$t('currencyRates.add')}}
                        v-card
                            v-card-title
                                span.headline {{ formTitle }}
                            v-card-text
                                v-container
                                    v-row
                                        v-col(cols='12')
                                            v-text-field(v-model='editedItem.Cur_Abbreviation', :label="$t('currencyRates.headers.currencyLetterCode')" outlined rounded clearable dense)
                                        v-col(cols='12')
                                            v-text-field(v-model='editedItem.Cur_Name', :label="$t('currencyRates.headers.currencyName')" outlined rounded clearable dense)
                                        v-col(cols='12')
                                            v-text-field(v-model='editedItem.Cur_Scale', :label="$t('currencyRates.headers.numberOfCurrencyUnits')" outlined rounded clearable dense)
                                        v-col(cols='12')
                                            v-text-field(v-model='editedItem.Cur_OfficialRate', :label="$t('currencyRates.headers.courseToBelRuble')" outlined rounded clearable dense)
                            v-card-actions
                                v-spacer
                                v-btn(rounded @click='saveItem') {{$t('currencyRates.save')}}
                                v-btn(rounded @click='close') {{$t('currencyRates.cancel')}}
                    v-btn.mb-2( @click='initialize' :loading="isLoading" :disabled="isLoading")
                        v-icon(left color='grey' ) mdi-update
                        | {{$t('currencyRates.updateData')}}
                        template(v-slot:loader)
                            span.custom-loader
                                v-icon(light) mdi-cached
                v-spacer
                v-text-field(v-model='search', append-icon='mdi-magnify', :label="$t('currencyRates.search')",  hide-details)
        template(v-slot:item.actions='{ item }')
            v-tooltip(bottom)
                template(v-slot:activator="{ on, attrs }")
                    v-icon.mr-2(small, @click='editItem(item, item.ID)' v-bind="attrs" v-on="on")
                        | mdi-pencil
                span {{$t('tooltip.edit')}}
            v-tooltip(bottom)
                template(v-slot:activator="{ on, attrs }")
                    v-icon(small, @click='deleteItem(item)' v-bind="attrs" v-on="on")
                        | mdi-delete
                span {{$t('tooltip.delete')}}
        template(v-slot:no-data)
            v-btn(@click='initialize') {{$t('currencyRates.updateData')}}
</template>

<script>
    export default {
        name: 'Table',
        props: {
            headers: {
                type: Array,
                required: true,
            },
        },
        data: () => ({
            isDialog: false,
            keyRates: 'rates',
            search: '',
            loading: false,
            rates: [],
            newRates: [],
            isLoading: false,
            editedIndex: -1,
            editedItem: {
                ID: '',
                Cur_Abbreviation: '',
                Cur_Name: '',
                Cur_Scale: '',
                Cur_OfficialRate: '',
            },
            defaultItem: {
                ID: '',
                Cur_Abbreviation: '',
                Cur_Name: '',
                Cur_Scale: '',
                Cur_OfficialRate: '',
            },
        }),
        computed: {
            formTitle () {
                return this.$t('currencyRates.' + (this.editedIndex === -1 ? 'newCurrency' : 'currencyEditing'))
            },
        },

        watch: {
            isDialog (val) {
                val || this.close()
            },

            newRates (newRates) {
                setTimeout(() => {
                    new Promise(resolve => {
                        sessionStorage.setItem(this.keyRates, JSON.stringify(newRates))
                        resolve(newRates)
                    }).then(data => {
                        this.rates = data
                    }).then(() => {
                        this.isLoading = false
                    }).catch(() => {
                        this.defaultErrorMessage()
                    })
                }, 2000)
            },
        },

        mounted () {
            sessionStorage.getItem(this.keyRates) !== null
                ? this.getRatesFromSession().then(data => {
                    this.rates = data
                }).then(() => {
                    this.isLoading = false
                }).catch(() => { this.defaultErrorMessage() })
                : this.initialize()
        },

        methods: {
            initialize () {
                this.isLoading = true
                setTimeout(() => {
                    fetch(process.env.VUE_APP_RESOURCE_RATES).then(response => response.json()).catch(() => {
                        alert(this.$t('currencyRates.messages.downloadFromServerFailed'))
                    }).then((data) => {
                        return data.map((item, index) => {
                            item.ID = ++index
                            delete item.Date
                            delete item.Cur_ID
                            return item
                        })
                    }).then((data) => {
                        sessionStorage.setItem('rates', JSON.stringify(data))
                        return data
                    }).then((data) => {
                        this.rates = data
                    }).then(() => {
                        this.isLoading = false
                    }).catch(() => {
                        this.defaultErrorMessage()
                    })
                }, 2000)
            },

            getRatesFromSession () {
                this.isLoading = true
                return new Promise(resolve => {
                    resolve(JSON.parse(sessionStorage.getItem(this.keyRates)))
                })
            },

            editItem (rate) {
                this.editedIndex = rate.ID
                this.editedItem = Object.assign({}, rate)
                this.isDialog = true
            },

            deleteItem (rate) {
                confirm(this.$t('currencyRates.messages.areYouSureYouWantToDeleteTheEntry')) && (
                    this.getRatesFromSession()
                        .then(data => data.filter(item => item.ID !== rate.ID))
                        .then(data => { this.newRates = data })
                        .catch(() => {
                            this.defaultErrorMessage()
                        })
                )
            },

            saveItem () {
                this.getRatesFromSession().then((data) => {
                    if (this.editedIndex > -1) {
                        return data.map(item => item.ID === this.editedIndex ? this.editedItem : item)
                    } else {
                        this.editedItem.ID = this.searchNextUniID(data)
                        data.push(this.editedItem)
                        return data
                    }
                }).then((data) => {
                    this.newRates = data
                }).then(() => {
                    this.close()
                }).catch(() => {
                    this.defaultErrorMessage()
                })
            },

            searchNextUniID (data) {
                return Math.max(...data.map(item => item.ID)) + 1
            },

            close () {
                this.isDialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            defaultErrorMessage () {
                alert(this.$t('currencyRates.messages.defaultErrMessage'))
                sessionStorage.clear()
            },
        },
    }
</script>

<style scoped lang="scss">
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }

    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .theme--dark.v-toolbar.v-sheet {
        background-color: #1E1E1E;
    }
</style>
