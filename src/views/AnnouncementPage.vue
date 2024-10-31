<template>
  <div class="mt-3 flex items-end justify-between">
    <div
      class="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-accent"
    >
      <RouterLink :to="{ name: 'home' }" class="text-sm">Regresar</RouterLink>
    </div>
  </div>

  <div class="p-4 flex flex-col md:flex-row">
    <div class="w-full md:w-1/2">
      <h2 class="text-2xl font-semibold">{{ anuncio?.title }}</h2>
      <h3 v-if="anuncio?.subtitle" class="text-lg text-gray-600">{{ anuncio?.subtitle }}</h3>
      <img class="w-full mt-4 rounded-lg" :src="anuncio?.image" :alt="anuncio?.title" />
    </div>

    <div class="w-full md:w-1/2 md:pl-8 md:mt-0">
      <p>{{ anuncio?.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Anuncio } from '@/interfaces/anuncio.interface';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const anuncio = ref<Anuncio | undefined>(undefined);

onMounted(() => {
  const announcements: Anuncio[] = [
    {
      id: '1',
      title: 'Misa Dominical',
      subtitle: '10:00 AM',
      image:
        'https://www.lavozdelafrontera.com.mx/local/vxvrji-misa-dominical-en-contingencia-por-covid-19/ALTERNATES/LANDSCAPE_768/Misa%20dominical%20en%20contingencia%20por%20COVID-19',
      description:
        'Consectetur Lorem incididunt magna ipsum tempor nulla nisi eiusmod sint. Officia do do velit tempor incididunt consectetur pariatur consectetur aliquip est ut ut consequat. Quis nisi pariatur ullamco mollit deserunt pariatur quis in. Dolor elit qui dolor ut reprehenderit deserunt. Nostrud deserunt id qui ea cillum consequat magna officia ullamco non.',
    },
    {
      id: '2',
      title: 'Grupo de Oración',
      subtitle: 'Miércoles 7:00 PM',
      image:
        'https://static.wixstatic.com/media/11062b_9fe8cf7ac275438cafa34f90833b0230~mv2.jpg/v1/fill/w_560,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Praying%20Hands.jpg',
      description:
        'Consectetur in ad incididunt proident cupidatat do ad dolor incididunt in excepteur fugiat. Proident dolor laborum fugiat est quis mollit. Adipisicing incididunt aliquip dolore cupidatat esse eiusmod ullamco amet consectetur aute. Proident ullamco ullamco deserunt elit anim commodo. Ad id sint officia aliqua minim ea.',
    },
  ];

  anuncio.value = announcements.find((a) => a.id === route.params.id) || undefined;
});
</script>
