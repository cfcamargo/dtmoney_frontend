<template>
    <Container>
        <Search />

        <ul class="pt-6">
            <li v-for="(transaction, index) in transactionsList" :key="index">
                <transaction-item :transaction="transaction"/>
            </li>
        </ul>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
            <Paginator />
        </div>
    </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    data() {
        return {
            transactionsList : [
                {description : 'Desenvolvimento de site', amount: 12000, category: 'venda', type: 'recipe', date:"22/04/2022"}
            ]
        }
    }
})
</script>

<style scoped>

</style>