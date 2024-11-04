<template>
  <div class="carousel w-full">
    <div class="carousel-item relative w-full">
      <img :src="slides[index]" class="w-full rounded-xl" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button @click="onPreviousSlide" class="btn btn-circle">❮</button>
        <button @click="onNextSlide" class="btn btn-circle">❯</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const index = ref(0);

interface Props {
  slides: string[];
}

const props = defineProps<Props>();

const onPreviousSlide = () => {
  if (index.value === 0) index.value = props.slides.length - 1;
  else index.value--;
};

const onNextSlide = () => {
  if (index.value === props.slides.length - 1) index.value = 0;
  else index.value++;
};
</script>
