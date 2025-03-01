<template>
    <div :class="{'pt-6': index !== 0}">
        <div class="flex items-end justify-between">
            <h4 class="font-body font-semibold uppercase text-black">
                {{ language_var.name }}
            </h4>
            <h3 class="font-body text-3xl font-bold text-primary">{{ language_var.coverage }}%</h3>
        </div>
        <div class="mt-2 h-3 w-full rounded-full bg-lila">
            <div class="h-3 rounded-full bg-primary" :style="{ width: language_var.coverage + '%' }"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    language_var: Lang;
    index: number;
}>()

export interface Lang {
    name: string;
    coverage: number;
}
</script>