<template>
  <custom-carousel :slides="slides" />
  <announcement-list :anuncios="announcements" />
</template>

<script lang="ts" setup>
import AnnouncementList from '@/components/AnnouncementList.vue';
import CustomCarousel from '@/components/CustomCarousel.vue';
import type { Anuncio } from '@/interfaces/anuncio.interface';

const slides = [
  'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',

  'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',

  'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',

  'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
];

const announcements: Anuncio[] = [
  {
    id: '1',
    title: 'Misa Dominical',
    subtitle: '10:00 AM',
    image:
      'https://www.lavozdelafrontera.com.mx/local/vxvrji-misa-dominical-en-contingencia-por-covid-19/ALTERNATES/LANDSCAPE_768/Misa%20dominical%20en%20contingencia%20por%20COVID-19',
  },
  {
    id: '2',
    title: 'Grupo de Oración',
    subtitle: 'Miércoles 7:00 PM',
    image:
      'https://static.wixstatic.com/media/11062b_9fe8cf7ac275438cafa34f90833b0230~mv2.jpg/v1/fill/w_560,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Praying%20Hands.jpg',
  },
  {
    id: '1',
    title: 'Misa Dominical',
    subtitle: '10:00 AM',
    image:
      'https://www.lavozdelafrontera.com.mx/local/vxvrji-misa-dominical-en-contingencia-por-covid-19/ALTERNATES/LANDSCAPE_768/Misa%20dominical%20en%20contingencia%20por%20COVID-19',
  },
  {
    id: '2',
    title: 'Grupo de Oración',
    subtitle: 'Miércoles 7:00 PM',
    image:
      'https://static.wixstatic.com/media/11062b_9fe8cf7ac275438cafa34f90833b0230~mv2.jpg/v1/fill/w_560,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Praying%20Hands.jpg',
  },
  {
    id: '1',
    title: 'Misa Dominical',
    subtitle: '10:00 AM',
    image:
      'https://www.lavozdelafrontera.com.mx/local/vxvrji-misa-dominical-en-contingencia-por-covid-19/ALTERNATES/LANDSCAPE_768/Misa%20dominical%20en%20contingencia%20por%20COVID-19',
  },
  {
    id: '2',
    title: 'Grupo de Oración',
    subtitle: 'Miércoles 7:00 PM',
    image:
      'https://static.wixstatic.com/media/11062b_9fe8cf7ac275438cafa34f90833b0230~mv2.jpg/v1/fill/w_560,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Praying%20Hands.jpg',
  },
  {
    id: '1',
    title: 'Misa Dominical',
    subtitle: '10:00 AM',
    image:
      'https://www.lavozdelafrontera.com.mx/local/vxvrji-misa-dominical-en-contingencia-por-covid-19/ALTERNATES/LANDSCAPE_768/Misa%20dominical%20en%20contingencia%20por%20COVID-19',
  },
  {
    id: '2',
    title: 'Grupo de Oración',
    subtitle: 'Miércoles 7:00 PM',
    image:
      'https://static.wixstatic.com/media/11062b_9fe8cf7ac275438cafa34f90833b0230~mv2.jpg/v1/fill/w_560,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Praying%20Hands.jpg',
  },
];
</script>
