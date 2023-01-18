<template>
    <header class="h-[212px] w-full pt-11 bg-zinc-900">
        <Container>
            <div class="w-full flex justify-between items-center">
                <img src="../../assets/images/logo.svg" alt="Logo Dtmoney">

                <button class="px-5 py-3 bg-emerald-600 text-zinc-100 hover:bg-emerald-500 rounded" @click="toggleModal">
                    Nova Transação
                </button>
            </div>
        </Container>
        <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <Modal @createNewTransaction='saveNewTransaction($event)' @closeModal="toggleModal"/>
        </transition>

        <transition enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight">
            <div v-show="toast.show === true">
                <div class="fixed top-2 right-2 w-[300px] h-24 grid place-items-center bg-[#CD5460] rounded-lg shadow-md" v-if="toast.type === 'error'">
                    <span class="text-zinc-100">Erro ao cadastrar transação</span>
                </div>
                <div class="fixed top-2 right-2 w-[300px] h-24 grid place-items-center bg-emerald-600 rounded-lg shadow-md" v-else>
                    <span class="text-zinc-100">{{ toast.message }}</span>
                </div>
            </div>
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
    methods: {
        saveNewTransaction(form : Transaction ){
            this.store.createTransaction(form)
        },
        toggleModal() {
            this.store.toggleModal()
        }
    },
    computed: {
        toast(){
            return this.store.$toast
        }
    }
})
</script>
