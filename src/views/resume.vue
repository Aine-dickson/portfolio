<template>
    <div>
        <div class="container mx-auto py-16 md:py-20" id="work">
            <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                My work experience
            </h2>
            <h3 class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Here's what I did before freelancing
            </h3>

            <div class="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
                <span class="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

                <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
                    <div class="md:w-2/5">
                        <div class="flex justify-center md:justify-start">
                            <span class="shrink-0">
                                <img src="/logo-spotify.svg" class="h-auto w-32" alt="company logo">
                            </span>
                            <div class="relative ml-3 hidden w-full md:block">
                                <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-3/5">
                        <div class="relative flex md:pl-18">
                            <span class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                            <div class="mt-1 flex">
                                <i class="bx bxs-right-arrow hidden text-primary md:block"></i>
                                <div class="md:-mt-1 md:pl-8">
                                    <span class="block font-body font-bold text-grey-40">Apr 2015 - Mar 2018</span>
                                    <span class="block pt-2 font-header text-xl font-bold uppercase text-primary">Frontend Developer</span>
                                    <div class="pt-2">
                                        <span class="block font-body text-black">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                                            venenatis enim.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div class="md:w-2/5">
                    <div class="flex justify-center md:justify-start">
                    <span class="shrink-0">
                        <img src="/logo-microsoft.svg" class="h-auto w-32" alt="company logo">
                    </span>
                    <div class="relative ml-3 hidden w-full md:block">
                        <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                    </div>
                </div>
                <div class="md:w-3/5">
                    <div class="relative flex md:pl-18">
                    <span class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                    <div class="mt-1 flex">
                        <i class="bx bxs-right-arrow hidden text-primary md:block"></i>
                        <div class="md:-mt-1 md:pl-8">
                        <span class="block font-body font-bold text-grey-40">Mar 2018 - September 2019</span>
                        <span class="block pt-2 font-header text-xl font-bold uppercase text-primary">Software Engineer</span>
                        <div class="pt-2">
                            <span class="block font-body text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                            venenatis enim.</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div class="md:w-2/5">
                    <div class="flex justify-center md:justify-start">
                        <span class="shrink-0">
                            <img src="/logo-fedex.svg" class="h-auto w-32" alt="company logo">
                        </span>
                        <div class="relative ml-3 hidden w-full md:block">
                            <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                        </div>
                    </div>
                </div>
                <div class="md:w-3/5">
                    <div class="relative flex md:pl-18">
                    <span class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                    <div class="mt-1 flex">
                        <i class="bx bxs-right-arrow hidden text-primary md:block"></i>
                        <div class="md:-mt-1 md:pl-8">
                        <span class="block font-body font-bold text-grey-40">October 2019 - Feb 2021</span>
                        <span class="block pt-2 font-header text-xl font-bold uppercase text-primary">DevOps Engineer</span>
                        <div class="pt-2">
                            <span class="block font-body text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                            venenatis enim.</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24" :style="`background-image: url(${baseUrl}experience-figure.png)`" id="statistics">
            <div class="container mx-auto">
                <div class="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
                    <div class="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                        <div class="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                            <div>
                                <img src="/icon-project.svg" class="mx-auto h-12 w-auto md:h-20" alt="icon project">
                            </div>
                            <div class="pt-5 md:pl-5 md:pt-0">
                                <h1 class="font-body text-2xl font-bold text-primary md:text-4xl">
                                    12
                                </h1>
                                <h4 class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                    Finished Projects
                                </h4>
                            </div>
                        </div>
    
                        <div class="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                            <div>
                                <img src="/icon-award.svg" class="mx-auto h-12 w-auto md:h-20" alt="icon award">
                            </div>
                            <div class="pt-5 md:pl-5 md:pt-0">
                                <h1 class="font-body text-2xl font-bold text-primary md:text-4xl">
                                3
                                </h1>
                                <h4 class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                Awards Won
                                </h4>
                            </div>
                        </div>
    
                        <div class="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                            <div>
                                <img src="/icon-happy.svg" class="mx-auto h-12 w-auto md:h-20" alt="icon happy clients">
                            </div>
                            <div class="pt-5 md:pl-5 md:pt-0">
                                <h1 class="font-body text-2xl font-bold text-primary md:text-4xl">
                                8
                                </h1>
                                <h4 class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                Happy Clients
                                </h4>
                            </div>
                        </div>
    
                        <div class="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                            <div>
                                <img src="/icon-puzzle.svg" class="mx-auto h-12 w-auto md:h-20" alt="icon puzzle">
                            </div>
                            <div class="pt-5 md:pl-5 md:pt-0">
                                <h1 class="font-body text-2xl font-bold text-primary md:text-4xl">
                                99
                                </h1>
                                <h4 class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                                Bugs Fixed
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL;
</script>