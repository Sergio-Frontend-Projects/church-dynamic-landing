<template>
  <custom-header />

  <div class="m-4">
    <RouterView />
  </div>

  <custom-footer />
</template>

<script lang="ts" setup>
import CustomFooter from '@/components/CustomFooter.vue';
import CustomHeader from '@/components/CustomHeader.vue';
</script>
