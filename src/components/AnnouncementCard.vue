<template>
  <article
    class="rounded-xl p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
  >
    <RouterLink :to="`/anuncio/${anuncio.id}`">
      <div class="relative flex items-end overflow-hidden rounded-xl">
        <img :src="anuncio.image" :alt="anuncio.title" class="h-[230px] object-cover" />
      </div>

      <div class="mt-1 p-2">
        <h2 class="text-slate-700">{{ anuncio.title }}</h2>
        <p class="mt-1 text-sm text-neutral capitalize">{{ anuncio.subtitle }}</p>

        <div class="mt-3 flex items-end justify-between">
          <div
            class="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-accent"
          >
            <RouterLink :to="`/anuncio/${anuncio.id}`" class="text-sm">Saber más</RouterLink>
          </div>
        </div>
      </div>
    </RouterLink>
  </article>
</template>

<script lang="ts" setup>
import type { Anuncio } from '@/interfaces/anuncio.interface';

interface Props {
  anuncio: Anuncio;
}

defineProps<Props>();
</script>
