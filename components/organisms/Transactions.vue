<template>
    <Container>
        <Search />
        <ul class="pt-6 flex flex-col gap-2">
            <li v-for="(transaction, index) in transactions" :key="index">
                <transaction-item :transaction="transaction"/>
            </li>
        </ul>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
            <Paginator />
        </div>
    </Container>
</template>

<script lang="ts">
import { useTransactionStore } from '@/store/Transaction'
import { Transaction } from '@/models'


export default {
    setup() {
    const store = useTransactionStore()

    return { store }
    },

    data(){
        return {
            transactions : []
        }
    },
    computed: {
        transactions(): Transaction[] {
            return this.store.all
        },
    },
}
</script>
