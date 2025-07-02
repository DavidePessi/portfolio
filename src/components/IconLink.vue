<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener"
    class="social-link"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <canvas ref="canvas" class="rough-frame"></canvas>
    <img :src="logo" alt="social icon" class="icon-logo" />

  </a>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import rough from 'roughjs/bundled/rough.esm.js';

const props = defineProps({
  logo: String,
  link: String,
  shape: {
    type: String,
    default: 'circle',
  },
});

const canvas = ref(null);
const isHovered = ref(false);

const draw = () => {
  const size = 60;
  const ratio = window.devicePixelRatio || 1;
  const ctx = canvas.value.getContext('2d');
  const rc = rough.canvas(canvas.value);

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  const options = {
    roughness: 1.5,
    stroke: 'black',
    ...(isHovered.value ? { fill: '#f0f0f0', fillStyle: 'solid' } : {})
  };

  if (props.shape === 'rectangle') {
    rc.rectangle(2, 2, size - 4, size - 4, options);
  } else {
    rc.circle(size / 2, size / 2, size - 4, options);
  }
};

onMounted(() => {
  const size = 60;
  const ratio = window.devicePixelRatio || 1;
  canvas.value.width = size * ratio;
  canvas.value.height = size * ratio;
  canvas.value.style.width = `${size}px`;
  canvas.value.style.height = `${size}px`;

  const ctx = canvas.value.getContext('2d');
  ctx.scale(ratio, ratio);

  draw();
});

watch(isHovered, draw);
</script>

<style scoped>
.social-link {
  position: relative;
  width: 60px;
  height: 60px;
  display: inline-block;
  margin: 0 10px;
}

.rough-frame {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.icon-logo {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 36px;
  height: 36px;
  z-index: 2;
}
</style>