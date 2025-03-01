<template>
    <div class="bg-grey-50" id="about">
        <div class="container mx-auto flex flex-col items-center py-16 md:py-20 lg:flex-row">
            <div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                <h2 class="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                    Who am I?
                </h2>
                <h4 class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                    I'm Ainebyoona Dickson, a passionate
                </h4>
                <div class="pt-6 font-body leading-relaxed text-grey-20 space-y-4">
                    <p class="text-justify">
                        software developer &amp; tutor dedicated to building efficient and scalable digital solutions. I specialize in backend and full-stack development, working extensively with Rust, JavaScript (Node.js & TypeScript), Vue.js and Kotlin's Jetpack Compose, along with strong experience in system architecture and utility programs.
                    </p>
                    <p class="text-justify">
                        My expertise spans across web, mobile, and desktop application development, ensuring high-performance solutions tailored to various domains, including distributed computing, operating systems concepts, and information system design.
                    </p>
                    <p class="text-justify">
                        Beyond coding, I have a keen interest in embedded systems, AI, and OS development, continuously researching and experimenting to push technological boundaries. While I haven’t had much hands-on experience in some of these fields due to financial constraints, I have built a solid theoretical foundation and am actively seeking opportunities to implement my ideas.
                    </p>
                </div>
                <div class="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                    <div class="flex items-center justify-center sm:justify-start">
                        <p class="font-body text-lg font-semibold uppercase text-grey-20">
                            Connect with me
                        </p>
                        <div class="hidden sm:block">
                            <i class="bx bx-chevron-right text-2xl text-primary"></i>
                        </div>
                    </div>
                    <div class="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                        <a href="/">
                            <i class="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                        </a>
                        <a href="/" class="pl-4">
                            <i class="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                        </a>
                        <a href="/" class="pl-4">
                            <i class="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                        </a>
                        <a href="/" class="pl-4">
                            <i class="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                        </a>
                        <a href="/" class="pl-4">
                            <i class="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                <language :language="language" :index="index"  v-for="(language, index) in languages" :key="'id_'+ language.name + language.coverage.toString"></language>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import language, { type Lang } from '../components/language.vue';

let languages: Lang[] = [
    { name: 'HTML & CSS', coverage: 96 },
    { name: 'Rust', coverage: 80 },
    { name: 'C/C++', coverage: 56 },
    { name: 'JavaScript', coverage: 91 },
    { name: 'NodeJs', coverage: 84 },
]
</script>