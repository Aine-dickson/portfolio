<template>
    <div class="bg-primary">
        <div class="container mx-auto flex flex-col justify-between py-6 sm:flex-row">
            <p class="text-center font-body text-white md:text-left">
                © Copyright {{ year }}. All right reserved, Ainebyoona Dickson.
            </p>
            <div class="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                <a href="/">
                    <i class="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="/" class="pl-4">
                    <i class="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="/" class="pl-4">
                    <i class="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="/" class="pl-4">
                    <i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="/" class="pl-4">
                    <i class="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

    let year = ref(new Date().getFullYear());

    setInterval(() => {
        year.value = new Date().getFullYear();
    }, 1000*60*60*24);
</script>