<template>
    <form @submit.prevent="searchTransactions, search" class="flex w-full gap-4 mt-16">
        <input @input="searchTransactions" @keyup.esc="cancelSearch" type="text" v-model="search" class="flex-1 w-full p-4 bg-zinc-900 text-zinc-200 placeholder:text-zinc-600 focus:ring-emerald-600 focus:outline-emerald-600" placeholder="Busque uma transação">
        <button class="flex gap-3 justify-center items-center border border-emerald-600 text-emerald-600 px-8 fill-current rounded hover:bg-emerald-600 hover:text-zinc-100 hover:fill-current">
            <img src="../../assets/images/search.svg" alt="">
            <span>Buscar</span>
        </button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {
            search : ''
        }
    },
    methods: {
        cancelSearch(){
            this.search = ''
            this.searchTransactions()
        },
        searchTransactions(){
            this.$emit('searchTransactions', this.search)
        }
    }
})
</script>

