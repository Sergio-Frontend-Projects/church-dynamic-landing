<template>
  <div class="carousel w-full">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :id="`slide${index + 1}`"
      class="carousel-item relative w-full"
    >
      <img :src="slide" class="w-full rounded-xl" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a
          :href="`#slide${((index - 1 + slides.length) % slides.length) + 1}`"
          class="btn btn-circle"
        >
          ❮
        </a>
        <a :href="`#slide${((index + 1) % slides.length) + 1}`" class="btn btn-circle"> ❯ </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  slides: string[];
}

defineProps<Props>();
</script>
