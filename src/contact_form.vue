<template>
    <div class="container mx-auto py-16 md:py-20" id="contact">
        <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Get in Touch
        </h2>
        <h4 class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Have Any Questions or Collaborations in Mind?
        </h4>
        <div class="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
            <p class="font-body text-grey-10">
                Feel free to reach out for any inquiries, project collaborations, or just to say hi! I’d love to hear from you.
            </p>
        </div>
        <form class="mx-auto w-full pt-10 sm:w-3/4" action="https://formsubmit.co/ainedixon01@gmail.com" method="POST">
            <div class="flex flex-col md:flex-row">
                <input class="mr-3 w-full rounded focus:outline-blue-500 border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5" placeholder="Name" type="text" id="name" name="name" v-model="form.name" required aria-label="Name">
                <input class="mt-6 w-full rounded focus:outline-blue-500 border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5" placeholder="Email" type="email" name="email" id="email" v-model="form.email" required aria-label="Email">
            </div>
            <textarea class="mt-6 w-full rounded focus:outline-blue-500 border-grey-50 px-4 py-3 font-body text-black md:mt-8" placeholder="Message" id="message" name="message" cols="30" rows="10" v-model="form.message" required aria-label="Message"></textarea>
            <button class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20" type="submit">
                Send
                <i class="bx bx-chevron-right relative -right-2 text-3xl"></i>
            </button>
        </form>
        <div class="flex flex-col pt-16 lg:flex-row">
            <div class="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
                <div class="flex items-center">
                    <i class="bx bx-phone text-2xl text-grey-40"></i>
                    <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                        My Phone
                    </p>
                </div>
                <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg relative flex space-x-4">
                    <span>(+256) 777532858 <span class="text-3xl font-extralight absolute z-10 -bottom-1 ml-1">/</span></span> <span>706337924</span>
                </p>
            </div>
            <div class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div class="flex items-center">
                    <i class="bx bx-envelope text-2xl text-grey-40"></i>
                    <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                        My Email
                    </p>
                </div>
                <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                    ainedixon01@gmail.com
                </p>
            </div>
            <div class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div class="flex items-center">
                    <i class="bx bx-map text-2xl text-grey-40"></i>
                    <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                        My Address
                    </p>
                </div>
                <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                    Kampala, Uganda
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

    let form = ref({
        name: '',
        email: '',
        message: ''
    });

    let submitForm = () => {
        form.value.name = '';
        form.value.email = '';
        form.value.message = '';
    }

    interface ContactForm {
        name: string;
        email: string;
        message: string;
    }
</script>
