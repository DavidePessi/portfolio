<template>
  <div class="fascia">
    <div class="descrizione">
      <h2 style="font-family: 'SketchBlock'">
  <router-link :to="link" class="hover-link">{{ title }}</router-link>
</h2>
      <p v-html="description" style="font-family: 'PatrickHand'"></p>
      <Highlight :text="props.tag" :fontSize="20"></Highlight>
    </div>
    <div class="foto">
      <canvas ref="canvasRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import rough from 'roughjs/bundled/rough.esm.js'
import Highlight from './Highlight.vue'

const router = useRouter();

const props = defineProps({
  title: String,
  image: String,
  link: String,
  tag: String,
  description: String,
})

const canvasRef = ref(null)
const canvasWidth = ref(416)
const canvasHeight = ref(229)

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')

  // Create rough canvas wrapper
  const rc = rough.canvas(canvas)

  // Load image
  const img = new Image()
  img.src = props.image
  img.onload = () => {
    // Draw image to canvas
    ctx.drawImage(img, 7, 4.5, canvasWidth.value - 13, canvasHeight.value - 9);
    

    // Draw rectangle around image
    rc.rectangle(5, 5, canvasWidth.value - 10, canvasHeight.value - 10, { stroke: 'black', strokeWidth: 4, roughness: 3 })
  }

  canvas.addEventListener('click', () => {
    router.push(props.link);
  });
})
</script>

<style scoped>
.fascia {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 4rem;
  padding-right:4rem;
  padding-top:1rem;
  padding-bottom:1rem;
  border: 1px solid #2d2d2d6c;
  gap: 10rem;
}

.descrizione {
  flex: 1;
  font-size: 25px;
}

.hover-link {
  text-decoration: none;
  color: darkred;
  transition: text-decoration 0.2s;
}

.hover-link:hover {
  text-decoration: underline;
}

.foto {
  flex: 0 0 400px;
}

canvas {
  width: 100%;
  height: auto;
  display: block;
}
</style>
