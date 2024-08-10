<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

import SuitmediaLogo from './Icons/SuitmediaLogo.vue'

const lastScrollY = ref(0)
const appbar = ref()

onMounted(() => {
    appbar.value = document.getElementById("appbar")
}),

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY
        if (currentScrollY < 100) {
            appbar.value.classList.remove('opacity-80')
            appbar.value.classList.remove('opacity-0')
            appbar.value.classList.add('opacity-100')
        }
        else if (currentScrollY > lastScrollY.value) {
            appbar.value.classList.remove('opacity-90')
            appbar.value.classList.remove('opacity-100')
            appbar.value.classList.add('opacity-0')
        }
        else {
            appbar.value.classList.remove('opacity-0')
            appbar.value.classList.remove('opacity-100')
            appbar.value.classList.add('opacity-80')
        }
        lastScrollY.value = currentScrollY
    })

</script>

<template>
    <header id="appbar" class="bg-accent flex justify-between px-28 py-2 items-center fixed z-50 w-full duration-150">
        <SuitmediaLogo class="h-14" />

        <ul class="text-white flex gap-7 font-light text-sm">
            <li class="hover:underline underline-offset-8"><router-link to="/">Work</router-link></li>
            <li class="hover:underline underline-offset-8"><router-link to="/about">About</router-link></li>
            <li class="hover:underline underline-offset-8"><router-link to="/services">Services</router-link></li>
            <li class="hover:underline underline-offset-8"><router-link to="/ideas">Ideas</router-link></li>
            <li class="hover:underline underline-offset-8"><router-link to="/careers">Careers</router-link></li>
            <li class="hover:underline underline-offset-8"><router-link to="/contact">Contact</router-link></li>
        </ul>
    </header>
</template>

<style scoped>
.router-link-active {
    text-decoration: underline;
    text-underline-offset: 8px;
}
</style>