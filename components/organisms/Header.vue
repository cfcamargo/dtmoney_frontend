<template>
    <header class="h-[212px] w-full pt-11 bg-zinc-900">
        <Container>
            <div class="w-full flex justify-between items-center">
                <img src="../../assets/images/logo.svg" alt="Logo Dtmoney">

                <button class="px-5 py-3 bg-emerald-600 text-zinc-100 hover:bg-emerald-500 rounded" @click="isOpen = true">
                    Nova Transação
                </button>
            </div>
        </Container>
        <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <Modal :isOpen="isOpen" @createNewTransaction='saveNewTransaction($event)' @closeModal="cancelCreateNewTransaction"/>
        </transition>
    </header>
</template>


<script lang="ts">
import { useTransactionStore } from '@/store/Transaction'
import { Transaction } from '@/models'


export default ({
    setup() {
        const store = useTransactionStore()
        return { store }
    },
    data() {
        return {
            isOpen : false
        }
    },
    methods: {
        saveNewTransaction(form : Transaction ){
            this.store.createTransaction(form)
            this.store.loadDashboard()
            this.isOpen = false
        },
        cancelCreateNewTransaction() {
            this.isOpen = false
        }
    },
})
</script>
