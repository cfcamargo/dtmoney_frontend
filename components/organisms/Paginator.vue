<template>
    <div class="flex gap-2 py-8 justify-center">
        <button disabled class="disabled:opacity-50 disabled:cursor-not-allowed">
            <img src="../../assets/images/arrow.svg" alt="" class="rotate-180">
        </button>
        <ul class="flex gap-1">
            <li class="w-10 h-10 grid place-items-center text-zinc-300 bg-emerald-700 rounded">1</li>
            <li class="w-10 h-10 grid place-items-center text-zinc-300 bg-zinc-700 rounded">2</li>
            <li class="w-10 h-10 grid place-items-center text-zinc-300 bg-zinc-700 rounded">3</li>
        </ul>
        <button>
            <img src="../../assets/images/arrow.svg" alt="">
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped>

</style>