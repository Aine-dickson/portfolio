<template>
  <div class="h-screen">
    <section class="h-full bg-[#5842A5]">
      <NavBar/>
      <define_me/>
    </section>
      <about/>
      <knowlegde/>
      <portfolio/>
      <resume/>
      <blogs/>
      <contact_form/>
      <news_letter/>
      <FooterBar/>
  </div>
</template>

<script setup lang="ts">
  import NavBar from './components/nav.vue';
  import define_me from './define_area.vue';
  import about from './about.vue';
  import knowlegde from './knowlegde.vue';
  import portfolio from './portfolio.vue';
  import resume from './resume.vue';
  import blogs from './blogs.vue';
  import contact_form from './contact_form.vue';
  import news_letter from './news_letter.vue';
  import FooterBar from './components/footer.vue';
</script>

<style>
  @layer components {
    .font-body {
        font-family: Open Sans,sans-serif
    }

    .font-header {
        font-family: Raleway,sans-serif
    }
    .bg-cover {
        background-size: cover
    }
    .from-hero-gradient-from {
        --tw-gradient-from: rgba(85,64,174,.95);
        --tw-gradient-to: rgba(85,64,174,0);
        --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }
    .from-blog-gradient-from {
        --tw-gradient-from: #8f9098;
        --tw-gradient-to: hsla(233,4%,58%,0);
        --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }
    .to-hero-gradient-to {
        --tw-gradient-to: rgba(65,47,144,.93)
    }
    .to-blog-gradient-to {
        --tw-gradient-to: #222
    }
    .border-primary {
        --tw-border-opacity: 1;
        border-color: rgb(85 64 175/var(--tw-border-opacity))
    }
    .border-grey-60 {
        --tw-border-opacity: 1;
        border-color: rgb(237 235 246/var(--tw-border-opacity))
    }
    .text-primary {
        --tw-text-opacity: 1;
        color: rgb(85 64 175/var(--tw-text-opacity))
    }
    .text-grey-20 {
        --tw-text-opacity: 1;
        color: rgb(124 124 124/var(--tw-text-opacity))
    }
    .bg-yellow {
          --tw-bg-opacity: 1;
          background-color: rgb(249 231 28/var(--tw-bg-opacity))
    }
    .text-grey-40 {
        --tw-text-opacity: 1;
        color: rgb(146 146 147/var(--tw-text-opacity))
    }
    .text-yellow {
        --tw-text-opacity: 1;
        color: rgb(249 231 28/var(--tw-text-opacity))
    }
    .bg-lila {
        --tw-bg-opacity: 1;
        background-color: rgb(230 229 236/var(--tw-bg-opacity))
    }
    .bg-primary {
        --tw-bg-opacity: 1;
        background-color: rgb(85 64 175/var(--tw-bg-opacity))
    }
    .hover\:bg-primary:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(85 64 175/var(--tw-bg-opacity))
    }
    .focus\:ring-yellow:focus {
        --tw-ring-color: #f9e71c;
        --tw-ring-offset-width: 2px;
        --tw-ring-offset-color: #fff;
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)
    }
    .bg-grey-70 {
        --tw-bg-opacity: 1;
        background-color: rgb(216 216 216/var(--tw-bg-opacity))
    }
    .border-grey-40 {
        --tw-border-opacity: 1;
        border-color: rgb(146 146 147/var(--tw-border-opacity))
    }
    .border-grey-50 {
        --tw-border-opacity: 1;
        border-color: rgb(244 243 248/var(--tw-border-opacity))
    }
    .bg-grey-40 {
        --tw-bg-opacity: 1;
        background-color: rgb(146 146 147/var(--tw-bg-opacity))
    }
    .bx {
      font-family: 'boxicons' !important;
      font-weight: normal;
      font-style: normal;
      font-variant: normal;
      line-height: 1;
      display: inline-block;
      text-transform: none;
      speak: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .bxs-right-arrow:before {
        content: "\ede2";
    }
  }
</style>