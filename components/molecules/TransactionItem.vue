<template>
    <div class="w-full px-8 py-5 bg-zinc-700 flex gap-8 rounded">
        <span class="w-2/4 text-zinc-100">{{transaction.description}}</span>
        <span class="flex-1 text-zinc-100" :class="transaction.type === 'recipe' ? 'text-emerald-600': 'text-red-600'">{{transformAmount}}</span>
        <span class="flex-1 text-zinc-100">{{transaction.category}}</span>
        <span class="flex-1 text-zinc-100">{{transaction.date}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface TransactionProps {
    description : string,
    amount : number
    category : string,
    type : 'recipe' | 'expense',
    date : string
}

export default defineComponent({
    props: {
        transaction : {
            type: Object as PropType<TransactionProps>,
            required : true
        }
    },
    computed: {
        transformAmount(): any{
            let value = this.transaction.amount
            let transformed = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            return transformed
        }
    }

})
</script>
