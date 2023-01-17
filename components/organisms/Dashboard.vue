<template>
    <Container>
        <div class="grid grid-cols-3 gap-8 -mt-16">
            <div v-for="(transaction, index) in data" :key="index">
                <Card :cardData="transaction"/>
            </div>
        </div>
    </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            data : [
                {description : 'Entradas', ico : 'recipe', amount: 17400,},
                {description : 'Recipe', ico : 'expense', amount: 17400,},
                {description : 'Total', ico : 'money', amount: 17400}
            ]
        }
    }
})
</script>

