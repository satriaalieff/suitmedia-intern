<script setup>
import IdeaCard from './IdeaCard.vue';
</script>

<template>
    <div class="grid grid-cols-4 mt-10 gap-10">
        <div v-for="(n, index) in 10" :key="index"
            class="border rounded-lg shadow-lg flex flex-col overflow-hidden cursor-pointer hover:shadow-2xl duration-300">
            <IdeaCard />
        </div>
    </div>
</template>