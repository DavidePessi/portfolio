<template>
  <div class="fascia">
    <ImageDraw :image="image1"></ImageDraw>
    <ImageDraw :image="image2"></ImageDraw>
    <ImageDraw :image="image3"></ImageDraw>
  </div>
</template>

<script setup>

const props = defineProps({
  image1: String,
  image2: String,
  image3: String,
})
</script>

<style scoped>
.fascia {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
</style>
