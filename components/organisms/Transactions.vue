<template>
    <Container>
        <Search @searchTransactions="searchTransactions($event)"/>
        <div v-if="loading" class="py-20 w-full flex justify-center">
            <Loading :icon_width=30 :icon_heigth=30 />
        </div>
        <ul class="pt-6 flex flex-col gap-2" v-else>
            <li v-if="!filter" v-for="(transaction, index) in transactions" :key="index">
                <transaction-item :transaction="transaction"/>
            </li>
            <li v-if="filter && filtered_transactions.length !== 0" v-for="(transaction, index) in filtered_transactions" :key="index">
                <transaction-item :transaction="transaction"/>

            </li>
            <li v-if="filter && filtered_transactions.length === 0 || !filter && transactions.length == 0" class="w-full py-4 flex items-center justify-center">
                <span class="text-center text-zinc-500">Nada Encontrado.</span>
            </li>
        </ul>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2" v-if="transactions.length > 20">
            <Paginator />
        </div>
    </Container>
</template>

<script lang="ts">
import { useTransactionStore } from '@/store/Transaction'
import { Transaction } from '@/models'
import { Loading } from '~~/.nuxt/components'


export default {
    setup() {
        const store = useTransactionStore()

        return { store }
    },

    data(){
        return {
            filtered_transactions : [] as Transaction[],
            filter: false
        }
    },
    methods: {
        searchTransactions(param : string){
            if(!param){
                this.filter=false
            } else {
                this.filtered_transactions = this.transactions.filter(transaction => transaction.description.includes(param))
                this.filter=true
            }
        }
    },
    computed: {
        transactions(): Transaction[] {
            return this.store.$all
        },
        loading(): Boolean {
            return this.store.$loading
        }
    },
}
</script>
