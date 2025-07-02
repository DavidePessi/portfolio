<template>
  <div class="fascia">
    <div class="foto">
      <ImageDraw :image="image"></ImageDraw>
    </div>
    <div class="descrizione">
      <p v-html="description"></p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  description: String,
})
</script>

<style scoped>
.fascia {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 8rem;
  border: 2px solid #2d2d2d6c;
  gap: 3rem;
}

.descrizione {
  flex: 1;
  font-size: 20px;
  font-family: 'PatrickHand';
}

.foto {
  flex: 0 0 400px;
}
</style>
