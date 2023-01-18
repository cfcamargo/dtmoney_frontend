<template>
    <Container>
        <div class="grid grid-cols-3 gap-8 -mt-16">
            <div v-for="(data, index) in dashboard" :key="index">
                <Card :cardData="data"/>
            </div>
        </div>
    </Container>
</template>

<script lang="ts">
import { useTransactionStore } from '@/store/Transaction'

export default {
    setup() {
        const store = useTransactionStore()
        return { store }
    },
    methods: {
        loadData(){
            this.store.loadTransactions()
            this.store.loadDashboard()
        },
    },
    computed: {
        dashboard(){
            return this.store.dashboardData
        },
    },
    created () {
        this.loadData();
    },
}
</script>

