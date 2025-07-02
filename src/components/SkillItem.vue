<template>
  <div class="skill-item">
    <canvas ref="canvas" class="rough-dot"></canvas>
    <p class="skill-text" v-html="text"></p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  text: String,
});

const canvas = ref(null);

onMounted(() => {
 const size = 30;
  const pixelRatio = window.devicePixelRatio || 1;

  canvas.value.width = size * pixelRatio;
  canvas.value.height = size * pixelRatio;
  canvas.value.style.width = `${size}px`;
  canvas.value.style.height = `${size}px`;

  const rc = rough.canvas(canvas.value);
  const ctx = canvas.value.getContext('2d');
  ctx.scale(pixelRatio, pixelRatio);

  rc.circle(size / 2, size / 2, size - 4, {
    stroke: 'black',
    fill: 'black',
    fillStyle: 'hachure',
    roughness: 1.5,
  });
});
</script>

<style scoped>
.skill-item {
  display: flex;
  align-items: center;
  margin: 0;
}

.rough-dot {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.skill-text {
  font-size: 1.5rem;
  font-family: 'PatrickHand';
  margin: 0;
}
</style>
