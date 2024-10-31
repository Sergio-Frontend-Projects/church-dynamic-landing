<template>
  <custom-header />

  <RouterView />

  <custom-footer />
</template>

<script lang="ts" setup>
import CustomFooter from '@/components/CustomFooter.vue';
import CustomHeader from '@/components/CustomHeader.vue';
</script>
