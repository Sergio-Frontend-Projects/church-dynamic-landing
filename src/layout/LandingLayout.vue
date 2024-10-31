<template>
  <div class="flex flex-col min-h-screen">
    <custom-header />

    <div class="flex-grow m-4">
      <RouterView />
    </div>

    <custom-footer />
  </div>
</template>

<script lang="ts" setup>
import CustomFooter from '@/components/CustomFooter.vue';
import CustomHeader from '@/components/CustomHeader.vue';
</script>
