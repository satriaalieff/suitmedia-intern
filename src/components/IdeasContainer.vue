<script setup>
import IdeasOption from './IdeasOption.vue';
import IdeaCardsPlaceholder from './IdeaCardsPlaceholder.vue';

import DoubleLeftArrow from './Icons/DoubleLeftArrow.vue';
import LeftArrow from './Icons/LeftArrow.vue';
import RightArrow from './Icons/RightArrow.vue';
import DoubleRightArrow from './Icons/DoubleRightArrow.vue';
</script>

<template>
    <div class="mx-28 mt-20">
        <IdeasOption />
        <IdeaCardsPlaceholder />

        <div class="flex justify-center w-full mt-20 mb-40 gap-1">
            <button class="w-6 h-8 flex justify-center items-center">
                <DoubleLeftArrow />
            </button>
            <button class="w-6 h-8 flex justify-center items-center">
                <LeftArrow />
            </button>

            <button v-for="(n, index) in 5" :key="index" class="w-6 h-8">
                <div v-if="n === 1"
                    class="w-full h-full rounded-lg flex justify-center items-center text-sm font-semibold bg-accent text-white">{{
                    n }}
                </div>
                <div v-else class="w-full h-full rounded-lg flex justify-center items-center text-sm font-semibold">{{ n }}</div>
            </button>

            <button class="w-6 h-8 flex justify-center items-center">
                <RightArrow />
            </button>
            <button class="w-6 h-8 flex justify-center items-center">
                <DoubleRightArrow />
            </button>
        </div>
    </div>
</template>