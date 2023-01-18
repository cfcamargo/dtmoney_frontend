<template>
    <div class="w-full h-screen bg-zinc-900 bg-opacity-80 grid place-items-center fixed inset-0" v-show="isOpen">
        <div class="bg-zinc-800 p-6 w-full max-w-[400px] rounded-2xl shadow-lg">
            <header class="flex w-full justify-between items-center">
                <h3 class="text-zinc-100">Nova Transação</h3>
                <button @click="$emit('closeModal')">
                    <img src="../../assets/images/close.svg" alt="">
                </button>
            </header>

            <form @submit.prevent="$emit('createNewTransaction', form)" class="flex flex-col gap-3 mt-6">
                <input type="text" v-model="form.description" class="bg-zinc-900 text-zinc-400 rounded border-none focus:outline-emerald-600 focus:ring-emerald-600 w-full p-4" placeholder="Descrição">
                <input type="number" v-model="form.amount" class="bg-zinc-900 text-zinc-400 rounded border-none focus:outline-emerald-600 focus:ring-emerald-600 w-full p-4" placeholder="Preço">
                <input type="text" v-model="form.category" class="bg-zinc-900 text-zinc-400 rounded border-none focus:outline-emerald-600 focus:ring-emerald-600 w-full p-4" placeholder="Categoria">

                <div class="grid grid-cols-2 gap-2">
                    <div class="px-6 py-4 flex gap-2 items-center justify-center rounded cursor-pointer" :class="form.type === 'recipe' ? 'bg-emerald-600' : 'bg-zinc-900'" @click="defineTransactionType('recipe')">
                        <img src="../../assets/images/recipe.svg" alt="Seta apontando para cima na cor verde">
                        <span class="text-zinc-100">Entada</span>
                    </div>

                    <div class="px-6 py-4 flex gap-2 items-center justify-center rounded cursor-pointer" :class="form.type === 'expense' ? 'bg-red-600' : 'bg-zinc-900'" @click="defineTransactionType('expense')">
                        <img src="../../assets/images/expense.svg" alt="Seta apontando para cima na cor verde">
                        <span class="text-zinc-100">Saída</span>
                    </div>
                </div>

                <button class="bg-emerald-600 text-white w-full px-5 py-3 flex items-center justify-center hover:bg-emerald-500 rounded">
                    Cadastrar
                </button>

            </form>
        </div>
    </div>
</template>

<script lang="ts">
export default ({
    props : {
        isOpen : {
            type : Boolean,
            required : true
        }
    },
    data(){
        return {
            form : {
                description: '',
                amount : '',
                category: '',
                type : '',
                date: new Date().toLocaleDateString().split('/').join('-')
            },
        }
    },
    methods: {
        defineTransactionType( value : string){
            if(value === this.form.type){
                this.form.type = ''
            } else {
                this.form.type = value
            }
        },

    },
    watch: {
        isOpen() {
            this.form = {
                description: '',
                amount : '',
                category: '',
                type : '',
                date: new Date().toLocaleDateString().split('/').join('-')
            }
        }
    },
})
</script>
