<template>
  <section class="p-4">
    <h2 class="text-xl font-semibold mb-4 text-center">Anuncios</h2>

    <div
      class="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <announcement-card v-for="anuncio in anuncios" :key="anuncio.id" :anuncio="anuncio" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Anuncio } from '@/interfaces/anuncio.interface';
import AnnouncementCard from './AnnouncementCard.vue';

interface Props {
  anuncios: Anuncio[];
}

defineProps<Props>();
</script>
