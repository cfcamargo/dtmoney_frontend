<template>
    <div class="flex flex-col gap-4 p-6 rounded bg-zinc-700">
        <header class="w-full flex justify-between items-center text-zinc-300">
            <span>{{cardData.description}}</span>
            <img :src="`/images/${cardData.ico}.svg`">
        </header>
        <span class="text-zinc-100 text-3xl font-semibold">
            {{ transformAmount }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'


interface CardProps {
    description : string,
    ico : string,
    amount : number,
}

export default defineComponent({
    props : {
        cardData : {
            type : Object as PropType<CardProps>,
            required : true
        }
    },
    computed: {
        transformAmount(){
            let value = this.cardData.amount
            let transformed = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            return transformed
        }
    }
})
</script>